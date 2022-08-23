/** You can assume this:
 * correctSolutions is never null
 * there are exactly 3 candidates
 * answers is never null
 * correctSolutions always has the same amount of elements as answers
 * we will ask who the winner is when answers for all 3 candidates are given (not before that)
 * nrOfSeconds is never completely equal for the 3 candidates
 */

export function Quiz(correctSolutions, mol) {
  let nrOfSecondsForWinner
  let nrOfCorrectAnswersForWinner
  let winner

  function betterScoreThenCurrentWinner(nrOfCorrectAnswers, nrOfSeconds) {
    if (!winner) return true
    if (nrOfCorrectAnswersForWinner < nrOfCorrectAnswers) return true
    if (nrOfCorrectAnswersForWinner === nrOfCorrectAnswers)
      return nrOfSeconds < nrOfSecondsForWinner
    return false
  }

  function giveAnswers(candidate, answers, nrOfSeconds) {
    if (candidate && [...candidate].some((char, i) => mol[i] === char)) return

    const nrOfCorrectAnswers = answers.filter(
      (a, index) => a === correctSolutions[index],
    ).length
    console.log(nrOfCorrectAnswers)
    if (betterScoreThenCurrentWinner(nrOfCorrectAnswers, nrOfSeconds)) {
      winner = candidate
      nrOfCorrectAnswersForWinner = nrOfCorrectAnswers
      nrOfSecondsForWinner = nrOfSeconds
    }
  }

  return {
    giveAnswers,
    get winner() {
      return winner
    },
  }
}
