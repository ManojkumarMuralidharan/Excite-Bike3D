#pragma strict
public var car : Collider;
function OnTriggerEnter (other : Collider) {
//Debug.Log("Collided with "+other.ToString);

if(car==other){
Application.LoadLevel(2);
}

}