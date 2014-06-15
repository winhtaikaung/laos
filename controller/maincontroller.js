app.controller("MainController", function($scope){
		$scope.understand = "I now understand how the scope works!";
		$scope.sss="XXXX";
		$scope.inputValue="";

		$scope.selectedPerson = 0;
	$scope.selectedGenre = null;
	$scope.people = [
		{
			id: 0,
			name: 'Leon',
			music: [
				'Rock',
				'Metal',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 1,
			name: 'Chris',
			music: [
				'Indie',
				'Drumstep',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 2,
			name: 'Harry',
			music: [
				'Rock',
				'Metal',
				'Thrash Metal',
				'Heavy Metal'
			]
		},
		{
			id: 3,
			name: 'Allyce',
			music: [
				'Pop',
				'RnB',
				'Hip Hop'
			]
		}
	];
	$scope.boys = [
		{
			id: 0,
			name: 'Leon',
			music: [
				'Rock',
				'Metal',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 1,
			name: 'Chris',
			music: [
				'Indie',
				'Drumstep',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 2,
			name: 'Harry',
			music: [
				'Rock',
				'Metal',
				'Thrash Metal',
				'Heavy Metal'
			]
		},
		{
			id: 3,
			name: 'Allyce',
			music: [
				'Pop',
				'RnB',
				'Hip Hop'
			]
		}
	];

	$scope.newname=null;

	$scope.addNew=function(){

			if($scope.newname!=null && $scope.newname!=""){

				$scope.boys.push({
							id: $scope.boys.length,
                			name: $scope.newname,	
                			live: true,
                			music: []
				});
			}
	}
});