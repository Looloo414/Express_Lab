const goals = [
    {goal: 'Flight School', done: true},
    {goal: 'Bootcamp', done: false},
    {goal: 'Bachelors Degree', done: false}
  ];
  
  module.exports = {
    getAll: function() {
      return goals;
    }
  };
  