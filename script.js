function daysOfAYear(y){
	return isLeap(y)? 366 : 365
}

function isLeap(y){
	if(y%4==0){
		if(y%100==0){
			if(y%400==0){
				return true
			}else{
				return false
			}
		}else{
			return true
		}
	}else{
		return false
	}
}