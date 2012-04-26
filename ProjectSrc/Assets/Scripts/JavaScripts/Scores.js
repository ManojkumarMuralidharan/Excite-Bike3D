#pragma strict
var myskin:GUISkin;
var minutes:int; 
var seconds:int;
var fraction:int;
var scorecard:String;

function Start () {
minutes=Car.finish_mins;
seconds=Car.finish_seconds;
fraction=Car.finish_fractions;
FloatScore(minutes,seconds,fraction);
}

function Update () {

}

function OnGUI(){
GUI.skin=myskin;
//var textTime:String;

//GUI.contentColor = Color.black;
   
   //GUI.backgroundColor=Color.gray;
   //GUI.Button(Rect (350, 450, 100,50), textTime);
var i:int =0;
scorecard="";

      	for(i=5;i>=0;i--)
 		{
		if(PlayerPrefs.HasKey(i+"key"))
		{
   		var dispmins :int =PlayerPrefs.GetFloat(i+"key")/60;
		var dispsecs:int = PlayerPrefs.GetFloat(i+"key")%60;
		var dispfrac:int = (PlayerPrefs.GetFloat(i+"key")*1000)%1000;
		var dispscore:String = String.Format ("{0:00}:{1:00}:{2:000}", dispmins, dispsecs, dispfrac);  
		scorecard +=dispscore+"\n";
 		Debug.Log("HighScore"+dispscore); 
		}
  		}
		
		GUI.Button (Rect (250, 60,255, 310), scorecard);
		GUI.Button (Rect (250, 370,255, 100), "Current Lap : \n"+String.Format ("{0:00}:{1:00}:{2:000}", minutes, seconds, fraction));

}

function FloatScore(minutes : int,seconds:int,fraction:int){
   var newScore : float;
   var i: int;
   var oldScore : int;
  
   newScore =(minutes*60)+seconds+(fraction/100);
  
  //highscore =newScore;
  for(i=0;i<5;i++)
  {
  
   if(PlayerPrefs.HasKey(i+"key"))
   {
  	if(PlayerPrefs.GetFloat(i+"key")<newScore)
  	{
		
		oldScore=PlayerPrefs.GetFloat(i+"key");	
   		PlayerPrefs.SetFloat(i+"key",newScore);
   		newScore=oldScore;
		Debug.Log("Here" + PlayerPrefs.GetFloat(i+"key"));
  	}	
   }
  else
   {
  	  PlayerPrefs.SetFloat(i+"key",newScore);
	  newScore=0;
   }	  
  PlayerPrefs.Save();
 } 
}