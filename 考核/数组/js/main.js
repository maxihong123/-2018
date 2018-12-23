var num=Array(21,52,33,62,22,93,35,57,354,245,243,333);
var i,j,temp;
function max(){
	for(i=0;i<num.length-1;i++)
	for(j=i;j<num.length;j++)
	{
		if(num[j]>num[i])
		{
			temp=num[j];
			num[i]=num[j];
			num[j]=temp;
		}
    }
    console.log(max(num))
}
alert(max(num));
function min(){
	for(i=0;i<num.length-1;i++)
	for(j=i;j<num.length;j++)
	{
		if(num[j]<num[i])
		{
			temp=num[j];
			num[i]=num[j];
			num[j]=temp;
		}
    }
    console.log(min(num))
}
alert(big(min));
