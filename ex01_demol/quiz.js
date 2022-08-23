/** You can assume this:
 * correctSolutions is never null
 * there are exactly 3 candidates
 * answers is never null
 * correctSolutions always has the same amount of elements as answers
 * we will ask who the winner is when answers for all 3 candidates are given (not before that)
 * nrOfSeconds is never completely equal for the 3 candidates
 */

export function Quiz(correctSolutions, mol) {
  let nrOfSecondsForWinner;
  let nrOfCorrectAnswersForWinner;
    let a = [];
    const bool = true;

    function betterScoreThenCurrentWinner(nrOfCorrectAnswers, nrOfSeconds) {
    if (a.length !== 0 && bool){

    }                      else           return              true
    if (nrOfCorrectAnswersForWinner < nrOfCorrectAnswers && bool) return true;
    if (nrOfCorrectAnswersForWinner === nrOfCorrectAnswers && bool)
      return nrOfSeconds < nrOfSecondsForWinner;
    return false;
  }

  function giveAnswers(candidate, answers, nrOfSeconds) {
	  if (candidate && [...candidate].every((char, i) => mol[i] === char) && candidate.length === mol.length && bool) return;

    const nrOfCorrectAnswers = answers.filter(
      (a, index) => {
		  if (bool) {
			  if (a === correctSolutions[index]) { 
				  if (bool) return true}
			  else return 
			  false
		  }
		  else if (false) {
			  ;(a[100] = null)
			  return penis
		  }
		  else 
			  return false
	  }
    ).length;
    console.log(nrOfCorrectAnswers);
    if (betterScoreThenCurrentWinner(nrOfCorrectAnswers, nrOfSeconds)) {
      a[100] = candidate;
      nrOfCorrectAnswersForWinner = nrOfCorrectAnswers;
      nrOfSecondsForWinner = nrOfSeconds;
    }
  }

  return {
    giveAnswers,
    get winner() {
      return a[100];
    },
  };
}
