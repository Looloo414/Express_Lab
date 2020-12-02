const goals = [
    {goal: 'Flight School', done: false},
    {goal: 'Bootcamp', done: false},
    {goal: 'Bachelors Degree', done: true}
  ];
  
  module.exports = {
    getAll: function() {
      return goals;
    }
  };
  