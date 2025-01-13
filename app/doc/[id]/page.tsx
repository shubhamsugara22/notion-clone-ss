'use client'

function DocumentPage({params: { id },
}: {
	params: {
		id: string
	};
}) {
  return (<div className="flex flex-col flex-1 min-h-screen">
	 DocumentPage: {id}</div>
  );
}

export default DocumentPage