using UnityEngine;
using System.Collections;

public class MainMenuHandler : MonoBehaviour {

	

public Rect newGame;
	void start(){
	//newGame=new Rect(10,30,btnTexture.width,btnTexture.width);
	}
    void OnGUI() {
		
		//GUI.DrawTexture(new Rect(10,30,150,50),btnTexture);
		//GUI.DrawTexture(new Rect(10,30,nitroTexture.width,nitroTexture.width),nitroTexture);	
      /*  if (!btnTexture) {
            Debug.LogError("Please assign a texture on the inspector");
            return;
        }
        if (GUI.Button(new Rect(10,30,150,50),btnTexture)){
            Debug.Log("Clicked the button with an NewGame");
			//Update();
		}
        
        if (GUI.Button(new Rect(10, 70, 150, 30), "Click"))
            Debug.Log("Clicked the button with Quit");
    */    
    }
	
}
