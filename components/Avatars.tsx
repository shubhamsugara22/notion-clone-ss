'use client';
import { useOthers, useSelf } from "@liveblocks/react/suspense"

function Avatars() {
	const other = useOthers();
	const self = useSelf();

  return (
	<div>
	  Avatars
	</div>
  )
}

export default Avatars
