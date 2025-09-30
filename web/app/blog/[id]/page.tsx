interface BlogPageProps {
  params: { id: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  return (
    <div>
      <h1>Blog ID: {params.id}</h1>
    </div>
  );
}
