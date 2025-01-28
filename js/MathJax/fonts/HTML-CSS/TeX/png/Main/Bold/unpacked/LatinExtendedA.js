/*************************************************************
 *
 *  MathJax/fonts/HTML-CSS/TeX/png/Main/Bold/LatinExtendedA.js
 *  
 *  Defines the image size data needed for the HTML-CSS OutputJax
 *  to display mathematics using fallback images when the fonts
 *  are not availble to the client browser.
 *
 *  ---------------------------------------------------------------------
 *
 *  Copyright (c) 2009-2013 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

MathJax.OutputJax["HTML-CSS"].defineImageData({
  "MathJax_Main-bold": {
    0x131: [  // LATIN SMALL LETTER DOTLESS I
      [3,3,0],[4,4,0],[4,5,0],[5,5,0],[6,6,0],[7,8,0],[8,9,0],[9,11,0],
      [11,13,0],[12,15,0],[15,18,0],[17,21,0],[21,25,0],[24,30,0]
    ]
  }
});

MathJax.Ajax.loadComplete(MathJax.OutputJax["HTML-CSS"].imgDir+"/Main/Bold"+
                          MathJax.OutputJax["HTML-CSS"].imgPacked+"/LatinExtendedA.js");
