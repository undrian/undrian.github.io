// Created by iWeb 3.0.4 local-build-20121008

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="341" height="521" style="height: 521px; left: 113px; position: absolute; top: 52px; width: 341px; z-index: 1; "><param name="src" value="Media/camp%206fps.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="341" height="521" style="height: 521px; left: 113px; position: absolute; top: 52px; width: 341px; z-index: 1; "><param name="src" value="bdt_camp_1_files/camp%206fps-1.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/camp%206fps.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="341" height="521" data="Media/camp%206fps.mov" style="height: 521px; left: 113px; position: absolute; top: 52px; width: 341px; z-index: 1; "><param name="src" value="Media/camp%206fps.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('bdt_camp_1_files/bdt_camp_1Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');applyEffects()}
