export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

return(
     <div className="text-blue-400 text-5xl flex justify-center items-center w-fu">{slug}</div>
)
}
