const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let  menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('0');
}
package com.example.mywebsiteapp;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private WebView myWebView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        myWebView = findViewById(R.id.webview);
        
        // Keeps links opening inside your app instead of Chrome
        myWebView.setWebViewClient(new WebViewClient());

        WebSettings webSettings = myWebView.getSettings();
        // Enable JavaScript if your site uses it
        webSettings.setJavaScriptEnabled(true); 
        // Fit the website cleanly to the phone screen
        webSettings.setUseWideViewPort(true);
        webSettings.setLoadWithOverviewMode(true);

        // Replace with your website's URL
        myWebView.loadUrl("https://yourwebsite.com");
    }

    // Allows the phone's Back button to go back a webpage instead of closing the app
    @Override
    public void onBackPressed() {
        if (myWebView.canGoBack()) {
            myWebView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
