import { Liveblocks } from '@liveblocks/node';

const key = process

if (!key) {
	throw new Error("LIVEBLOCKS_PRIVATE_KEY is not set");
}

const liveblocks = new Liveblocks({
	secret: key,
});

export default liveblocks;