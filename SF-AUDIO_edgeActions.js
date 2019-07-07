
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("EHONDA-INFO").hide();sym.$("BLANKA-INFO").hide();sym.$("GUILE-INFO").hide();sym.$("CHUNLI-INFO").hide();sym.$("BALROG-INFO").hide();sym.$("BISON-INFO").hide();sym.$("DHALSIM-INFO").hide();sym.$("VEGA-INFO").hide();sym.$("KEN-INFO").hide();sym.$("ZANGIEF-NFO").hide();sym.$("SAGAT-INFO").hide();sym.$("RYU-INFO").hide();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'BT-START'
(function(symbolName){})("BT-START");
//Edge symbol end:'BT-START'

//=========================================================

//Edge symbol: 'VIDEO'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_BT-START}","click",function(sym,e){sym.getSymbolElement().hide();sym.$("VIDEO")[0].pause();sym.getComposition().getStage().$("CHOOSE").show();sym.getComposition().getStage().$("Outros-Choose")[0].currentTime=0;if(sym.getComposition().getStage().$("Outros-Choose")[0].paused){sym.getComposition().getStage().$("Outros-Choose")[0].play();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("CHOOSE").hide();});
//Edge binding end
})("VIDEO");
//Edge symbol end:'VIDEO'

//=========================================================

//Edge symbol: 'CHOOSE'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group}","click",function(sym,e){sym.getSymbolElement().hide();sym.getComposition().getStage().$("VIDEO2").show();sym.getComposition().getStage().getSymbol("VIDEO2").$("VIDEO")[0].currentTime=0;if(sym.getComposition().getStage().getSymbol("VIDEO2").$("VIDEO")[0].paused){sym.getComposition().getStage().getSymbol("VIDEO2").$("VIDEO")[0].play();}
sym.getComposition().getStage().$("Outros-Choose")[0].pause();});
//Edge binding end
})("CHOOSE");
//Edge symbol end:'CHOOSE'

//=========================================================

//Edge symbol: 'RYU-CHOOSE'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RYU-PEQ}","mouseover",function(sym,e){sym.getComposition().getStage().$("outros-choose-mouse2")[0].currentTime=0;if(sym.getComposition().getStage().$("outros-choose-mouse2")[0].paused){sym.getComposition().getStage().$("outros-choose-mouse2")[0].play();}
sym.stop("IDA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RYU-PEQ}","mouseout",function(sym,e){sym.stop("VOLTA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RYU-PEQ}","click",function(sym,e){sym.getComposition().getStage().$("Ryu-Local")[0].play();sym.getComposition().getStage().$("Ryu-Cenario")[0].currentTime=0;if(sym.getComposition().getStage().$("Ryu-Cenario")[0].paused){sym.getComposition().getStage().$("Ryu-Cenario")[0].play();}
sym.getComposition().getStage().$("CHOOSE").hide();sym.getComposition().getStage().$("RYU-INFO").show();sym.getComposition().getStage().$("Outros-Choose")[0].pause();});
//Edge binding end
})("RYU-CHOOSE");
//Edge symbol end:'RYU-CHOOSE'

//=========================================================

//Edge symbol: 'EHONDA-CHOOSE'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_E-HONDA-PEQ}","mouseover",function(sym,e){sym.getComposition().getStage().$("outros-choose-mouse2")[0].currentTime=0;if(sym.getComposition().getStage().$("outros-choose-mouse2")[0].paused){sym.getComposition().getStage().$("outros-choose-mouse2")[0].play();}
sym.stop("IDA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_E-HONDA-PEQ}","mouseout",function(sym,e){sym.stop("VOLTA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_E-HONDA-PEQ}","click",function(sym,e){sym.getComposition().getStage().$("CHOOSE").hide();sym.getComposition().getStage().$("EHONDA-INFO").show();sym.getComposition().getStage().$("EHonda-Cenario")[0].currentTime=0;if(sym.getComposition().getStage().$("EHonda-Cenario")[0].paused){sym.getComposition().getStage().$("EHonda-Cenario")[0].play();}
sym.getComposition().getStage().$("Ryu-Local")[0].play();sym.getComposition().getStage().$("Outros-Choose")[0].pause();});
//Edge binding end
})("EHONDA-CHOOSE");
//Edge symbol end:'EHONDA-CHOOSE'

//=========================================================

//Edge symbol: 'BLANKA-CHOOSE'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BLANKA-PEQ}","mouseover",function(sym,e){sym.getComposition().getStage().$("outros-choose-mouse2")[0].currentTime=0;if(sym.getComposition().getStage().$("outros-choose-mouse2")[0].paused){sym.getComposition().getStage().$("outros-choose-mouse2")[0].play();}
sym.stop("IDA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BLANKA-PEQ}","mouseout",function(sym,e){sym.stop("VOLTA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BLANKA-PEQ}","click",function(sym,e){sym.getComposition().getStage().$("CHOOSE").hide();sym.getComposition().getStage().$("BLANKA-INFO").show();sym.getComposition().getStage().$("Outros-Choose")[0].pause();sym.getComposition().getStage().$("Blanka-Local")[0].currentTime=0;if(sym.getComposition().getStage().$("Blanka-Local")[0].paused){sym.getComposition().getStage().$("Blanka-Local")[0].play();}
sym.getComposition().getStage().$("Blanka-Cenario")[0].currentTime=0;if(sym.getComposition().getStage().$("Blanka-Cenario")[0].paused){sym.getComposition().getStage().$("Blanka-Cenario")[0].play();}});
//Edge binding end
})("BLANKA-CHOOSE");
//Edge symbol end:'BLANKA-CHOOSE'

//=========================================================

//Edge symbol: 'GUILE-CHOOSE'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_GUILE-PEQ}","mouseover",function(sym,e){sym.getComposition().getStage().$("outros-choose-mouse2")[0].currentTime=0;if(sym.getComposition().getStage().$("outros-choose-mouse2")[0].paused){sym.getComposition().getStage().$("outros-choose-mouse2")[0].play();}
sym.stop("IDA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_GUILE-PEQ}","mouseout",function(sym,e){sym.stop("VOLTA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_GUILE-PEQ}","click",function(sym,e){sym.getComposition().getStage().$("CHOOSE").hide();sym.getComposition().getStage().$("GUILE-INFO").show();sym.getComposition().getStage().$("Outros-Choose")[0].pause();sym.getComposition().getStage().$("Guile-Cenario")[0].currentTime=0;if(sym.getComposition().getStage().$("Guile-Cenario")[0].paused){sym.getComposition().getStage().$("Guile-Cenario")[0].play();}
sym.getComposition().getStage().$("Ken-Local")[0].currentTime=0;if(sym.getComposition().getStage().$("Ken-Local")[0].paused){sym.getComposition().getStage().$("Ken-Local")[0].play();}});
//Edge binding end
})("GUILE-CHOOSE");
//Edge symbol end:'GUILE-CHOOSE'

//=========================================================

//Edge symbol: 'KEN-CHOOSE'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_KEN-PEQ}","mouseover",function(sym,e){sym.getComposition().getStage().$("outros-choose-mouse2")[0].currentTime=0;if(sym.getComposition().getStage().$("outros-choose-mouse2")[0].paused){sym.getComposition().getStage().$("outros-choose-mouse2")[0].play();}
sym.stop("IDA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_KEN-PEQ}","mouseout",function(sym,e){sym.stop("VOLTA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_KEN-PEQ}","click",function(sym,e){sym.getComposition().getStage().$("CHOOSE").hide();sym.getComposition().getStage().$("KEN-INFO").show();sym.getComposition().getStage().$("Outros-Choose")[0].pause();sym.getComposition().getStage().$("Ken-Local")[0].currentTime=0;if(sym.getComposition().getStage().$("Ken-Local")[0].paused){sym.getComposition().getStage().$("Ken-Local")[0].play();}
sym.getComposition().getStage().$("Ken-Cenario")[0].currentTime=0;if(sym.getComposition().getStage().$("Ken-Cenario")[0].paused){sym.getComposition().getStage().$("Ken-Cenario")[0].play();}});
//Edge binding end
})("KEN-CHOOSE");
//Edge symbol end:'KEN-CHOOSE'

//=========================================================

//Edge symbol: 'CHUNLI-CHOOSE'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHUNLI-PEQ}","mouseover",function(sym,e){sym.getComposition().getStage().$("outros-choose-mouse2")[0].currentTime=0;if(sym.getComposition().getStage().$("outros-choose-mouse2")[0].paused){sym.getComposition().getStage().$("outros-choose-mouse2")[0].play();}
sym.stop("IDA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHUNLI-PEQ}","mouseout",function(sym,e){sym.stop("VOLTA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHUNLI-PEQ}","click",function(sym,e){sym.getComposition().getStage().$("Chunli-Cenario")[0].currentTime=0;if(sym.getComposition().getStage().$("Chunli-Cenario")[0].paused){sym.getComposition().getStage().$("Chunli-Cenario")[0].play();}
sym.getComposition().getStage().$("Local-Chunli")[0].play();sym.getComposition().getStage().$("CHOOSE").hide();sym.getComposition().getStage().$("CHUNLI-INFO").show();sym.getComposition().getStage().$("Outros-Choose")[0].pause();});
//Edge binding end
})("CHUNLI-CHOOSE");
//Edge symbol end:'CHUNLI-CHOOSE'

//=========================================================

//Edge symbol: 'ZANGIEF-CHOOSE'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ZANGIEF-PEQ}","mouseover",function(sym,e){sym.getComposition().getStage().$("outros-choose-mouse2")[0].currentTime=0;if(sym.getComposition().getStage().$("outros-choose-mouse2")[0].paused){sym.getComposition().getStage().$("outros-choose-mouse2")[0].play();}
sym.stop("IDA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ZANGIEF-PEQ}","mouseout",function(sym,e){sym.stop("VOLTA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ZANGIEF-PEQ}","click",function(sym,e){sym.getComposition().getStage().$("CHOOSE").hide();sym.getComposition().getStage().$("ZANGIEF-NFO").show();sym.getComposition().getStage().$("Outros-Choose")[0].pause();sym.getComposition().getStage().$("Zangief-Local")[0].currentTime=0;if(sym.getComposition().getStage().$("Zangief-Local")[0].paused){sym.getComposition().getStage().$("Zangief-Local")[0].play();}
sym.getComposition().getStage().$("Zangief-Cenario")[0].currentTime=0;if(sym.getComposition().getStage().$("Zangief-Cenario")[0].paused){sym.getComposition().getStage().$("Zangief-Cenario")[0].play();}});
//Edge binding end
})("ZANGIEF-CHOOSE");
//Edge symbol end:'ZANGIEF-CHOOSE'

//=========================================================

//Edge symbol: 'DHALSIM-CHOOSE'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_DHALSIM-PEQ}","mouseover",function(sym,e){sym.getComposition().getStage().$("outros-choose-mouse2")[0].currentTime=0;if(sym.getComposition().getStage().$("outros-choose-mouse2")[0].paused){sym.getComposition().getStage().$("outros-choose-mouse2")[0].play();}
sym.stop("IDA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_DHALSIM-PEQ}","mouseout",function(sym,e){sym.stop("VOLTA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_DHALSIM-PEQ}","click",function(sym,e){sym.getComposition().getStage().$("CHOOSE").hide();sym.getComposition().getStage().$("DHALSIM-INFO").show();sym.getComposition().getStage().$("Outros-Choose")[0].pause();sym.getComposition().getStage().$("Dhalsim-local")[0].currentTime=0;if(sym.getComposition().getStage().$("Dhalsim-local")[0].paused){sym.getComposition().getStage().$("Dhalsim-local")[0].play();}
sym.getComposition().getStage().$("Dhalsim-Cenario")[0].currentTime=0;if(sym.getComposition().getStage().$("Dhalsim-Cenario")[0].paused){sym.getComposition().getStage().$("Dhalsim-Cenario")[0].play();}});
//Edge binding end
})("DHALSIM-CHOOSE");
//Edge symbol end:'DHALSIM-CHOOSE'

//=========================================================

//Edge symbol: 'BALROG-CHOOSE'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BALROG-PEQ}","mouseover",function(sym,e){sym.getComposition().getStage().$("outros-choose-mouse2")[0].currentTime=0;if(sym.getComposition().getStage().$("outros-choose-mouse2")[0].paused){sym.getComposition().getStage().$("outros-choose-mouse2")[0].play();}
sym.stop("IDA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BALROG-PEQ}","mouseout",function(sym,e){sym.stop("VOLTA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BALROG-PEQ}","click",function(sym,e){sym.getComposition().getStage().$("CHOOSE").hide();sym.getComposition().getStage().$("BALROG-INFO").show();sym.getComposition().getStage().$("Outros-Choose")[0].pause();sym.getComposition().getStage().$("Balrog-Cenario")[0].currentTime=0;if(sym.getComposition().getStage().$("Balrog-Cenario")[0].paused){sym.getComposition().getStage().$("Balrog-Cenario")[0].play();}
sym.getComposition().getStage().$("Ken-Local")[0].currentTime=0;if(sym.getComposition().getStage().$("Ken-Local")[0].paused){sym.getComposition().getStage().$("Ken-Local")[0].play();}});
//Edge binding end
})("BALROG-CHOOSE");
//Edge symbol end:'BALROG-CHOOSE'

//=========================================================

//Edge symbol: 'VEGA-CHOOSE'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VEGA-PEQ}","mouseover",function(sym,e){sym.getComposition().getStage().$("outros-choose-mouse2")[0].currentTime=0;if(sym.getComposition().getStage().$("outros-choose-mouse2")[0].paused){sym.getComposition().getStage().$("outros-choose-mouse2")[0].play();}
sym.stop("IDA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VEGA-PEQ}","mouseout",function(sym,e){sym.stop("VOLTA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VEGA-PEQ}","click",function(sym,e){sym.getComposition().getStage().$("CHOOSE").hide();sym.getComposition().getStage().$("VEGA-INFO").show();sym.getComposition().getStage().$("Outros-Choose")[0].pause();sym.getComposition().getStage().$("Vega-Local")[0].currentTime=0;if(sym.getComposition().getStage().$("Vega-Local")[0].paused){sym.getComposition().getStage().$("Vega-Local")[0].play();}
sym.getComposition().getStage().$("Vega-Cenario")[0].currentTime=0;if(sym.getComposition().getStage().$("Vega-Cenario")[0].paused){sym.getComposition().getStage().$("Vega-Cenario")[0].play();}});
//Edge binding end
})("VEGA-CHOOSE");
//Edge symbol end:'VEGA-CHOOSE'

//=========================================================

//Edge symbol: 'SAGAT-CHOOSE'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SAGAT-PEQ}","mouseover",function(sym,e){sym.getComposition().getStage().$("outros-choose-mouse2")[0].currentTime=0;if(sym.getComposition().getStage().$("outros-choose-mouse2")[0].paused){sym.getComposition().getStage().$("outros-choose-mouse2")[0].play();}
sym.stop("IDA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SAGAT-PEQ}","mouseout",function(sym,e){sym.stop("VOLTA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SAGAT-PEQ}","click",function(sym,e){sym.getComposition().getStage().$("CHOOSE").hide();sym.getComposition().getStage().$("SAGAT-INFO").show();sym.getComposition().getStage().$("Outros-Choose")[0].pause();sym.getComposition().getStage().$("Sagat-Cenario")[0].currentTime=0;if(sym.getComposition().getStage().$("Sagat-Cenario")[0].paused){sym.getComposition().getStage().$("Sagat-Cenario")[0].play();}
sym.getComposition().getStage().$("Bison-Local")[0].currentTime=0;if(sym.getComposition().getStage().$("Bison-Local")[0].paused){sym.getComposition().getStage().$("Bison-Local")[0].play();}});
//Edge binding end
})("SAGAT-CHOOSE");
//Edge symbol end:'SAGAT-CHOOSE'

//=========================================================

//Edge symbol: 'BISON-CHOOSE'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BISON-PEQ}","mouseover",function(sym,e){sym.getComposition().getStage().$("outros-choose-mouse2")[0].currentTime=0;if(sym.getComposition().getStage().$("outros-choose-mouse2")[0].paused){sym.getComposition().getStage().$("outros-choose-mouse2")[0].play();}
sym.stop("IDA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BISON-PEQ}","mouseout",function(sym,e){sym.stop("VOLTA");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BISON-PEQ}","click",function(sym,e){sym.getComposition().getStage().$("CHOOSE").hide();sym.getComposition().getStage().$("BISON-INFO").show();sym.getComposition().getStage().$("Outros-Choose")[0].pause();sym.getComposition().getStage().$("Bison-Local")[0].currentTime=0;if(sym.getComposition().getStage().$("Bison-Local")[0].paused){sym.getComposition().getStage().$("Bison-Local")[0].play();}
sym.getComposition().getStage().$("Bison-Cenario")[0].currentTime=0;if(sym.getComposition().getStage().$("Bison-Cenario")[0].paused){sym.getComposition().getStage().$("Bison-Cenario")[0].play();}});
//Edge binding end
})("BISON-CHOOSE");
//Edge symbol end:'BISON-CHOOSE'

//=========================================================

//Edge symbol: 'RYU-INFO'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group}","click",function(sym,e){sym.getComposition().getStage().$("Ryu-Hadouken")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2}","click",function(sym,e){sym.getComposition().getStage().$("Ryu-Shoruyken")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","click",function(sym,e){sym.getComposition().getStage().$("RYU-Tatsumake-2")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHOOSE-PEQ}","click",function(sym,e){sym.getSymbolElement().hide();sym.getComposition().getStage().$("Ryu-Cenario")[0].pause();sym.getComposition().getStage().$("CHOOSE").show();sym.getComposition().getStage().$("Outros-Choose")[0].currentTime=0;if(sym.getComposition().getStage().$("Outros-Choose")[0].paused){sym.getComposition().getStage().$("Outros-Choose")[0].play();}});
//Edge binding end
})("RYU-INFO");
//Edge symbol end:'RYU-INFO'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//Edge symbol: 'EHONDA-INFO'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group}","click",function(sym,e){sym.getComposition().getStage().$("EHonda-huhui")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2}","click",function(sym,e){sym.getComposition().getStage().$("EHonda-Comemoracao")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHOOSE-PEQ}","click",function(sym,e){sym.getSymbolElement().hide();sym.getComposition().getStage().$("CHOOSE").show();sym.getComposition().getStage().$("EHonda-Cenario")[0].pause();sym.getComposition().getStage().$("Outros-Choose")[0].currentTime=0;if(sym.getComposition().getStage().$("Outros-Choose")[0].paused){sym.getComposition().getStage().$("Outros-Choose")[0].play();}});
//Edge binding end
})("EHONDA-INFO");
//Edge symbol end:'EHONDA-INFO'

//=========================================================

//Edge symbol: 'BLANKA-INFO'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_GroupCopy2}","click",function(sym,e){sym.getComposition().getStage().$("Blanka-Bolinha")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2Copy2}","click",function(sym,e){sym.getComposition().getStage().$("Blanka-Choque")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHOOSE-PEQCopy}","click",function(sym,e){sym.getSymbolElement().hide();sym.getComposition().getStage().$("CHOOSE").show();sym.getComposition().getStage().$("Blanka-Cenario")[0].pause();sym.getComposition().getStage().$("Outros-Choose")[0].currentTime=0;if(sym.getComposition().getStage().$("Outros-Choose")[0].paused){sym.getComposition().getStage().$("Outros-Choose")[0].play();}});
//Edge binding end
})("BLANKA-INFO");
//Edge symbol end:'BLANKA-INFO'

//=========================================================

//Edge symbol: 'GUILE-INFO'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_GroupCopy3}","click",function(sym,e){sym.getComposition().getStage().$("Guile-Sonic-Boom")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2Copy3}","click",function(sym,e){sym.getComposition().getStage().$("Guile-Facao")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHOOSE-PEQCopy2}","click",function(sym,e){sym.getSymbolElement().hide();sym.getComposition().getStage().$("CHOOSE").show();sym.getComposition().getStage().$("Guile-Cenario")[0].pause();sym.getComposition().getStage().$("Outros-Choose")[0].currentTime=0;if(sym.getComposition().getStage().$("Outros-Choose")[0].paused){sym.getComposition().getStage().$("Outros-Choose")[0].play();}});
//Edge binding end
})("GUILE-INFO");
//Edge symbol end:'GUILE-INFO'

//=========================================================

//Edge symbol: 'KEN-INFO'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group}","click",function(sym,e){sym.getComposition().getStage().$("Ryu-Hadouken")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2}","click",function(sym,e){sym.getComposition().getStage().$("Ryu-Shoruyken")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","click",function(sym,e){sym.getComposition().getStage().$("RYU-Tatsumake-2")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHOOSE-PEQCopy3}","click",function(sym,e){sym.getSymbolElement().hide();sym.getComposition().getStage().$("CHOOSE").show();sym.getComposition().getStage().$("Ken-Cenario")[0].pause();sym.getComposition().getStage().$("Outros-Choose")[0].currentTime=0;if(sym.getComposition().getStage().$("Outros-Choose")[0].paused){sym.getComposition().getStage().$("Outros-Choose")[0].play();}});
//Edge binding end
})("KEN-INFO");
//Edge symbol end:'KEN-INFO'

//=========================================================

//Edge symbol: 'CHUNLI-INFO'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_GroupCopy5}","click",function(sym,e){sym.getComposition().getStage().$("Chunli-Minitati")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2Copy5}","click",function(sym,e){sym.getComposition().getStage().$("Chunli-Comemora")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHOOSE-PEQCopy4}","click",function(sym,e){sym.getSymbolElement().hide();sym.getComposition().getStage().$("CHOOSE").show();sym.getComposition().getStage().$("Chunli-Cenario")[0].pause();sym.getComposition().getStage().$("Outros-Choose")[0].currentTime=0;if(sym.getComposition().getStage().$("Outros-Choose")[0].paused){sym.getComposition().getStage().$("Outros-Choose")[0].play();}});
//Edge binding end
})("CHUNLI-INFO");
//Edge symbol end:'CHUNLI-INFO'

//=========================================================

//Edge symbol: 'ZANGIEF-NFO'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_GroupCopy6}","click",function(sym,e){sym.getComposition().getStage().$("Zangief-voz")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2Copy6}","click",function(sym,e){sym.getComposition().getStage().$("EHonda-Comemoracao")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHOOSE-PEQCopy5}","click",function(sym,e){sym.getSymbolElement().hide();sym.getComposition().getStage().$("CHOOSE").show();sym.getComposition().getStage().$("Zangief-Cenario")[0].pause();sym.getComposition().getStage().$("Outros-Choose")[0].currentTime=0;if(sym.getComposition().getStage().$("Outros-Choose")[0].paused){sym.getComposition().getStage().$("Outros-Choose")[0].play();}});
//Edge binding end
})("ZANGIEF-NFO");
//Edge symbol end:'ZANGIEF-NFO'

//=========================================================

//Edge symbol: 'DHALSIM-INFO'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_GroupCopy7}","click",function(sym,e){sym.getComposition().getStage().$("Dhalsim-Yoga-Fire")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2Copy7}","click",function(sym,e){sym.getComposition().getStage().$("Dhalsim-Yoga-Flame")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHOOSE-PEQCopy6}","click",function(sym,e){sym.getSymbolElement().hide();sym.getComposition().getStage().$("CHOOSE").show();sym.getComposition().getStage().$("Dhalsim-Cenario")[0].pause();sym.getComposition().getStage().$("Outros-Choose")[0].currentTime=0;if(sym.getComposition().getStage().$("Outros-Choose")[0].paused){sym.getComposition().getStage().$("Outros-Choose")[0].play();}});
//Edge binding end
})("DHALSIM-INFO");
//Edge symbol end:'DHALSIM-INFO'

//=========================================================

//Edge symbol: 'BALROG-INFO'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_GroupCopy8}","click",function(sym,e){sym.getComposition().getStage().$("Balrog-soco")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHOOSE-PEQCopy7}","click",function(sym,e){sym.getSymbolElement().hide();sym.getComposition().getStage().$("CHOOSE").show();sym.getComposition().getStage().$("Balrog-Cenario")[0].pause();sym.getComposition().getStage().$("Outros-Choose")[0].currentTime=0;if(sym.getComposition().getStage().$("Outros-Choose")[0].paused){sym.getComposition().getStage().$("Outros-Choose")[0].play();}});
//Edge binding end
})("BALROG-INFO");
//Edge symbol end:'BALROG-INFO'

//=========================================================

//Edge symbol: 'VEGA-INFO'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_GroupCopy9}","click",function(sym,e){sym.getComposition().getStage().$("Vega-Iaaaa")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2Copy9}","click",function(sym,e){sym.getComposition().getStage().$("Vega-Comemoracao")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHOOSE-PEQCopy8}","click",function(sym,e){sym.getSymbolElement().hide();sym.getComposition().getStage().$("CHOOSE").show();sym.getComposition().getStage().$("Vega-Cenario")[0].pause();sym.getComposition().getStage().$("Outros-Choose")[0].currentTime=0;if(sym.getComposition().getStage().$("Outros-Choose")[0].paused){sym.getComposition().getStage().$("Outros-Choose")[0].play();}});
//Edge binding end
})("VEGA-INFO");
//Edge symbol end:'VEGA-INFO'

//=========================================================

//Edge symbol: 'SAGAT-INFO'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_GroupCopy10}","click",function(sym,e){sym.getComposition().getStage().$("Sagat-Tiger")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2Copy10}","click",function(sym,e){sym.getComposition().getStage().$("Sagat-Upercut")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHOOSE-PEQCopy9}","click",function(sym,e){sym.getSymbolElement().hide();sym.getComposition().getStage().$("CHOOSE").show();sym.getComposition().getStage().$("Sagat-Cenario")[0].pause();sym.getComposition().getStage().$("Outros-Choose")[0].currentTime=0;if(sym.getComposition().getStage().$("Outros-Choose")[0].paused){sym.getComposition().getStage().$("Outros-Choose")[0].play();}});
//Edge binding end
})("SAGAT-INFO");
//Edge symbol end:'SAGAT-INFO'

//=========================================================

//Edge symbol: 'BISON-INFO'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_GroupCopy11}","click",function(sym,e){sym.getComposition().getStage().$("Bison-psycho")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CHOOSE-PEQCopy10}","click",function(sym,e){sym.getSymbolElement().hide();sym.getComposition().getStage().$("CHOOSE").show();sym.getComposition().getStage().$("Bison-Cenario")[0].pause();sym.getComposition().getStage().$("Outros-Choose")[0].currentTime=0;if(sym.getComposition().getStage().$("Outros-Choose")[0].paused){sym.getComposition().getStage().$("Outros-Choose")[0].play();}});
//Edge binding end
})("BISON-INFO");
//Edge symbol end:'BISON-INFO'
})(jQuery,AdobeEdge,"SF-AUDIO-PROJECT");