function skillsMember() {
   return{
     restrict: 'E',
     templateUrl: 'views/member.html',
     controller: 'skillsMemberController',
     controllerAs: 'vm',
        bindToController: true,
        scope:{
            member: '='
        }

   };
}