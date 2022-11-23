import React from 'react'

export default () => (
  <html>
    <head>
    <title>For Tigray </title>
    </head>
    <body>
        <div class="header">
            <h1>Tython </h1>
            <p>Tython is a python based programming language for Tigrinya.</p>
        </div>
    </body>  
    <div>
        <div id="demo-contenteditable" contenteditable="true"><u>Please code here:</u></div>
    </div>

    <div >
        <iframe id="designmode" srcdoc="
            <html>
                <head><script>document.designMode = 'on';</script><style>*{font-family: monospace;font-size: 14px;}</style></head>
                <body>
                    <u>Type</u> <b>text</b> <i>here</i>
                </body>
            </html>">
        </iframe>
    </div>
  </html>
)
