#pragma strict

public var car : Collider;
function OnTriggerEnter (other : Collider) {

	//Debug.Log("Collision in the swamp detected!");
	if(car==other)
	{
		Debug.Log("Collision in the swamp by the car detected!");
		
	}

}