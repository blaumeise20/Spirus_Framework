import GameObject from "./objects/object";
import { Collision } from "./types";

export function checkIfTwoGameObjectsAreColliding(object1: GameObject, object2: GameObject): Collision {
	let aLeftOfB = ( object1.position.x + object1.scale.x ) < object2.position.x;
	let aRightOfB = object1.position.x > ( object2.position.x + object2.scale.x );
	let aBelowB = ( object1.position.y + object1.scale.y ) < object2.position.y;
	let aAboveB = object1.position.y > ( object2.position.y + object2.scale.y );

	return {
		left: aLeftOfB,
		right: aRightOfB,
		up: aAboveB,
		down: aBelowB,

		overall: !(aLeftOfB || aRightOfB || aAboveB || aBelowB)
	}

}

export function isVectorOOB(vector: number) {
	if (vector <= -70) { return true }
	if (vector >= 70) { return true }
	return false
}