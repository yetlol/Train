/**
 * this is round 006 about js
 * @authors tanyan
 * @date    2017-08-21 11:09:13
 */
function countMax(str){
        var str = str.split('').sort().join('');

        // 先进行排序处理，然后重新组装成字符串
        var reg = /(\w)\1+/g;
        var maxNum = 0;
        var maxList = [];
        str.replace(reg, function($0, $1){
            if (maxNum < $0.length) {
                maxList = []
                maxList.push($0);
                maxNum = $0.length;
            }else if(maxNum == $0.length){
                maxList.push($0);
            }
        });
        var result = {}
        maxList.map((ele) => {
          console.log(ele[0], ele.length);
          result[ele[0]] = ele.length;
        })
        return result
}

function main(){
  str1 = "abcsbaddbizdbasa"
  str2 = "aaaaabbdbdbbeeeeeeeee"
  console.log(countMax(str1))
  console.log(countMax(str2))
}

main()