#!/bin/bash
# takes an image as argument and processes only if non-zero size
echo "$1"

identify -format "Test Test2 %wx%h" "$1" | #get image info
  gawk '{print gensub(/x/," ","",$3)}' |  #print size with space instead of 'x' 
    while read w h ; do  #read in width and height
         if [ $w -gt 1500 ] || [ $h -gt 1500 ] ; then            
            echo "processing image $1 ..."
            mogrify -resize '1500x1500>' $1        
        else
            echo "OK image $1 ..."
        fi
    done
