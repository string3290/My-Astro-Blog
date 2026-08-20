---
title: "Logic Pro 7 將音軌輸出成 mono 單聲道"
date: 2007-05-10
categories: 
  - "notes"
tags: 
  - "tools"
  - "arrangement"
coverImage: "studio-4065107_1280-e1568354575122.jpg"
---

這個問題之前已經困擾了我好一陣子，因為將編好的一些樂器過帶成mono來作混音是必需的。而以前使用Cubase或是Nuendo，他在做過帶輸出時都是可以選擇是否要將該軌輸出為mono，但是Logic卻是無法選擇，翻了說明書卻只是籠統的寫說，“要過成mono，請將該樂器完全的pan左或pan右，就是output1或output2的位置“，照他這樣簡單的方式，做出來真是讓我吐血。

Logic擁有可以一次讓你把所有屬於不同channel的track過出來的能力，是增加了不少效率，但是過出來的卻不會自動分為stereo或mono，也不能用手動設定的方式調整，是可惜了點；但是要把單軌過成mono，說明書卻也沒有寫的很清楚，我透過上網搜尋，自己嘗試，才整理出以下的方式；如果各位有更好更簡單的方法，也請不吝告知囉～

1\. 將要過帶成mono的2軌各pan最左和最右，solo此2軌，然後bounce時stereo type選擇Split L+R，bounce完成後再把輸出的L檔和R檔改成你所solo的那軌名稱。

2\. 將要過成mono的單軌pan最左(output1)，solo此軌，然後進到mixer畫面，將output1-2的track下方的stereo按鈕圖示按成mono圖示(讓交錯的2個圈圈按一下變成1個)，這時原本的output1-2就變成了output1，然後點擊mono圖示旁的bnce鈕，就可以開始輸出了。

3\. 再來這比較複雜一點點，但可以讓你同時過8軌mono出來。

i. 先進入Logic上方主選單中的 Audio→ Surround，將show as: 改為7.1，然後記住下方的8個聲道名稱，待會過出的8個mono檔名稱是與此對應，記住後才知道哪個檔是哪一軌然後改名。

[![](/images/%E5%9C%96%E7%89%87+1.png)](http://bp1.blogger.com/_kgmUiEOKWw0/RkM4dO4km8I/AAAAAAAAACQ/OMLWB6fokws/s1600-h/åç+1.png)[![](/images/%E5%9C%96%E7%89%87+2.png)](http://bp1.blogger.com/_kgmUiEOKWw0/RkM4dO4km9I/AAAAAAAAACY/htmaI0OawMk/s1600-h/åç+2.png) ii. 將你要過成mono的軌solo，把該軌的output選項改成Surround，點擊pan的大圓圖來放大，將放大圖中的5.1改為7.1，此時你會發現原本的圓形上又多了2個喇叭位置，加上中間點總共有8個點。 [![](/images/%E5%9C%96%E7%89%87+3.png)](http://bp0.blogger.com/_kgmUiEOKWw0/RkM4E-4km5I/AAAAAAAAAB4/o0tH56fJaBg/s1600-h/åç+3.png)[![](/images/%E5%9C%96%E7%89%87+4.png)](http://bp1.blogger.com/_kgmUiEOKWw0/RkM4FO4km6I/AAAAAAAAACA/_jJ8B2N8gVg/s1600-h/åç+4.png) iii. 將你要過成mono的軌分別pan到8個點的位置上。 iv. 從主選單File中選擇Bounce，把PCM中的Surround Bounce選為7.1，然後Bounce。

[![](/images/%E5%9C%96%E7%89%87+5.png)](http://bp1.blogger.com/_kgmUiEOKWw0/RkM4FO4km7I/AAAAAAAAACI/yPv2Wz67Kas/s1600-h/åç+5.png) v. 將bounce出來的8個檔分別改成你要的音軌名稱，就大功告成。
