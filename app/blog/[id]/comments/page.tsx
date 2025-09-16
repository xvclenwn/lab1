import { notFound } from "next/navigation";
import { comments } from "../../../data/blogs";

export default function CommentDetail({ params }: { params: { id: string } }) {
  const commentId = Number(params.id);
  const comment = comments.find((b) => b.id === commentId);

  if (!comment) {
    notFound();
  }

  return (
    <div className="p-6">
      <h5 className="text-3xl font-bold mb-2">{comment.commentname}</h5>
      <p className="text-gray-700">{comment.description}</p>
      <p className="mt-4 text-sm text-gray-500">
        Comment ID: {comment.id} - dynamically routed page
      </p>
    </div>
  );
}