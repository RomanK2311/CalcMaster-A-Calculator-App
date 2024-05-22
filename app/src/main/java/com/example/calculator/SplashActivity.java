package com.example.calculator;

import androidx.appcompat.app.AppCompatActivity;


import android.content.Intent;

import android.os.Bundle;

import android.view.Window;

import android.view.WindowManager;


public class SplashActivity extends AppCompatActivity {


    @Override

    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);



        Window window = getWindow() ;




        setContentView(R.layout.activity_splash_screen);




        Thread splashTread = new Thread(){




            @Override

            public void run() {

                try {

                    sleep(1000);

                    startActivity(new Intent(getApplicationContext(),MainActivity.class));

                    finish();

                } catch (InterruptedException e) {

                    e.printStackTrace();

                }


                super.run();

            }

        };


        splashTread.start();





    }


}