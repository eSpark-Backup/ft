package com.fitnesstracker;

import com.facebook.react.ReactActivity;
import android.content.DialogInterface;
import android.view.KeyEvent;
import android.app.AlertDialog;
import android.content.DialogInterface.OnClickListener;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  void showDialog () {
    boolean isBack = false; 
    AlertDialog.Builder builder = new AlertDialog.Builder(this);
    builder.setTitle("Alert");
    builder.setMessage("Are you sure you want to exit?");
    builder.setPositiveButton("OK", new OnClickListener() {
        @Override
        public void onClick(DialogInterface dialog, int which) {


            finish();
        }
    });

    builder.setNegativeButton("Cancel", new OnClickListener() {
        @Override
        public void onClick(DialogInterface dialog, int which) {
            // isBack = false;
            finish();

        }
    });
    builder.show();
}
  @Override
  protected String getMainComponentName() {
    return "fitnessTracker";
  }
//   @Override
//     public boolean onKeyDown(int keyCode, KeyEvent event) {
//         if (keyCode == KeyEvent.KEYCODE_HOME) {
//             showDialog();
//             return true;
//         }
//         else if (keyCode == KeyEvent.KEYCODE_BACK) {
//             showDialog();
//             return true;
//         }
//         else if (keyCode == KeyEvent.KEYCODE_APP_SWITCH) {
//             showDialog();
//             return true;
//         }
//         return super.onKeyDown(keyCode, event);
//     }
}
