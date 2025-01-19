import { auth } from "@clerk/nextjs/server"
function DockLayout({ children, params: {id} }: { children: React.ReactNode, params: {id: string}; 
}) {
	auth.protect();
  return (
	<div>{children}</div>
  )
}

export default DockLayout