#pragma strict


private var backButtonObj: GameObject; 

private var backButton: GUITexture; 

private var newButtonObj: GameObject; 

private var newButton: GUITexture; 

private var highScoresButtonObj: GameObject; 

private var highScoresButton: GUITexture; 

//private var helpButtonObj: GameObject; 

//private var helpButton: GUITexture; 

function Start () {
this.backButtonObj = GameObject.Find("Quit"); 

this.backButton = this.backButtonObj.GetComponent(GUITexture); 


this.newButtonObj = GameObject.Find("NewGame");

this.newButton = this.newButtonObj.GetComponent(GUITexture);
/*
this.helpButtonObj = GameObject.Find("Help_mainmenu");

this.helpButton = this.newButtonObj.GetComponent(GUITexture);
*/

//this.newButton.pixelInset(Screen.width-100,Screen.height-100);


this.highScoresButtonObj=GameObject.Find("HighScores");
this.highScoresButton=this.highScoresButtonObj.GetComponent(GUITexture);

 return; 
}

function Update () {


for (var touch : Touch in Input.touches) {
		
		 if(touch.phase == TouchPhase.Began && this.backButton.HitTest(touch.position))

       {
       // do amazing things
       Application.Quit();
       } 
        if(touch.phase == TouchPhase.Began && this.newButton.HitTest(touch.position))

       {
       // do amazing things
       Application.LoadLevel(1);
       } /* if(touch.phase == TouchPhase.Began && this.helpButton.HitTest(touch.position))

       {
       // do amazing things
       Application.LoadLevel(3);
       } */
        if(touch.phase == TouchPhase.Began && this.highScoresButton.HitTest(touch.position))

       {
       // do amazing things
       Application.LoadLevel(3);
       } 
		
		}
		

}
