var twoSum = function(nums, target) {
let getIndex=[]
     nums.forEach((elem,i)=>{
       nums.forEach((num,j)=>{
            if(i!=j && elem + num == target ){
                getIndex = [i,j]
            }
        })
    })

return getIndex.reverse()
};


console.log(twoSum([2,7,11,15], 9))

console.log(twoSum([3,2,4],6))