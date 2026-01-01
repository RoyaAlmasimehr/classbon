"use client";
import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/_components/comment";
import { TextPlaceholder } from "@/app/_components/placeholders";
import { Fragment } from "react";

const CourseComments = () => {
  const { slug } = useParams();
  const { data: comments, error,isFetchingNextPage,fetchNextPage,hasNextPage,refetch} = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });

  return (
    <>
      {comments?.pages.map((currentPage) => (
        <Fragment key={`comment-page-${currentPage}`}>
          {currentPage.data.map((comment) => (
            <Comment
              key={`comment-${comment.id}`}
              {...comment}
              variant="info"
            />
          ))}
        </Fragment>
      ))}
     
      {/* {isF && <TextPlaceholder />} */}
    </>
  );
};
export default CourseComments;
