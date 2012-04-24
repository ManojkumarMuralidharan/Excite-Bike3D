#pragma strict

private var mainMenuButtonObj: GameObject; 

private var mainMenuButton: GUITexture; 

function Start () {
this.mainMenuButtonObj = GameObject.Find("MainMenu_help"); 

this.mainMenuButton = this.mainMenuButtonObj.GetComponent(GUITexture); 
}

function Update () {
for (var touch : Touch in Input.touches) {
     
       if(touch.phase == TouchPhase.Began && this.mainMenuButton.HitTest(touch.position))
       {
       // do amazing things
       Application.LoadLevel(0);
       } 
	}

}
function OnGUI(){



}
