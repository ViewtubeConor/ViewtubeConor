import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import type { SimpleYouTubeCommentThread } from "../../services/simpleYouTubeApi"
import { partitionCommentThreads } from "./useCommentResponderController"

const source = (relativePath: string) => readFileSync(new URL(relativePath, import.meta.url), "utf8")

describe("creator engagement cross-surface parity", () => {
 const studioComment = source("../../components/CommentResponder.tsx")
 const studioCommunity = source("../../components/CommunityPostGenerator.tsx")
 const dashboardComment = source("../../views/dashboard/widgets/CommentReplyWidget.tsx")
 const dashboardCommunity = source("../../views/dashboard/widgets/CommunityPostWidget.tsx")

 it("routes both comment surfaces through the shared controller", () => {
  expect(studioComment).toContain("useCommentResponderController")
  expect(dashboardComment).toContain("useCommentResponderController")
  expect(dashboardComment).not.toContain("fetchAllCommentThreads")
  expect(studioComment).not.toContain("yt_analytics_cache")
 })

 it("routes both community surfaces through shared persistence and actions", () => {
  for (const file of [studioCommunity, dashboardCommunity]) {
   expect(file).toContain("useCommunityPostController")
   expect(file).toContain("Copy Post")
   expect(file).toContain("Go to Channel")
   expect(file).not.toContain("yt_analytics_cache")
  }
 })

 it("keeps accessible labels and live feedback in the Studio renderers", () => {
  expect(studioComment).toContain('aria-live="polite"')
  expect(studioComment).toContain('htmlFor="comment-reply-copy"')
  expect(studioCommunity).toContain('aria-live="polite"')
  expect(studioCommunity).toContain('htmlFor="community-post-copy"')
  expect(studioCommunity).not.toContain("transition-all")
 })

 it("partitions only fully hydrated comment threads and recognizes creator replies", () => {
  const makeThread = (
   id: string,
   replyAuthorChannelId?: string,
   repliesComplete = true,
  ): SimpleYouTubeCommentThread => ({
   id,
   snippet: {
    videoId: "video-1",
    topLevelComment: { id: `${id}-top`, snippet: { textOriginal: `Comment ${id}` } },
    totalReplyCount: replyAuthorChannelId ? 1 : 0,
   },
   replies: {
    comments: replyAuthorChannelId
     ? [{ id: `${id}-reply`, snippet: { authorChannelId: { value: replyAuthorChannelId } } }]
     : [],
   },
   repliesComplete,
  })

  const result = partitionCommentThreads([
   makeThread("new"),
   makeThread("replied", "channel-1"),
   makeThread("incomplete", "channel-1", false),
  ], "channel-1")

  expect(result.unreplied.map((thread) => thread.id)).toEqual(["new"])
  expect(result.replied.map((thread) => thread.id)).toEqual(["replied"])
 })
})
