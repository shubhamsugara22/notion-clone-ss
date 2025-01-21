'use client'
import { useMyPresence } from "@liveblocoks/react/suspense";
function LiveCursorProvider({children} : {children: React.ReactNode}) {
  const [myPresence , updateMyPresence] = useMyPresence();
  const others = useOthers();
  
  return (
	<div>
    {/* Render cursor*/}
    </div>
  )
}

export default LiveCursorProvider