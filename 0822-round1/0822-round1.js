/**
 * this is round 001 about js
 * @authors tanyan
 * @date    2017-08-22 11:09:13
 */
function Intersect (a, b){
// 交集
  var intersect = []
  while(a.length)
  a.map((aEle, aIndex) => {
  	b.map((bEle, bIndex) => {
  		if(aEle === bEle){
  			intersect.push(bEle);
  		}
  	})
  })
}

function main(){
  nums1 = [1,2,2,1]
  nums2 = [2,2]
  console.log(Intersect(nums1, nums2))
}

main()