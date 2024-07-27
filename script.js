
const leetCodeApiUrl = 'https://leetcode-api-faisalshohag.vercel.app/PulkitArora';
const gfgApiUrl = 'https://geeks-for-geeks-api.vercel.app/pulkit8690';

async function fetchLeetCodeData() {
  try {
    console.log('Fetching LeetCode data...');
    const response = await fetch(leetCodeApiUrl);
    const data = await response.json();
    console.log('Fetched LeetCode data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    return null;
  }
}

async function fetchGFGData() {
  try {
    console.log('Fetching GFG data...');
    const response = await fetch(gfgApiUrl);
    const data = await response.json();
    console.log('Fetched GFG data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching GFG data:', error);
    return null;
  }
}

function updateLeetCodeUI(data) {
  if (!data) {
    console.log('No LeetCode data available to update UI');
    return;
  }

  console.log('Updating LeetCode UI with data:', data);

  document.getElementById('leetCodeTotalSolved').textContent = data.totalSolved;
  document.getElementById('leetCodeTotalProblems').textContent = data.totalQuestions;

  document.getElementById('leetCodeEasySolved').textContent = `${data.easySolved}/${data.totalEasy}`;
  document.getElementById('leetCodeMediumSolved').textContent = `${data.mediumSolved}/${data.totalMedium}`;
  document.getElementById('leetCodeHardSolved').textContent = `${data.hardSolved}/${data.totalHard}`;

  document.getElementById('leetCodeRanking').textContent = `Ranking: ${data.ranking}`;
}

function updateLeetCodeProgressCircles(data) {
  const totalCircumference = 2 * Math.PI * 70;
  const easyPercentage = (data.easySolved / data.totalEasy) * 100;
  const mediumPercentage = (data.mediumSolved / data.totalMedium) * 100;
  const hardPercentage = (data.hardSolved / data.totalHard) * 100;

  document.getElementById('easyCircle').style.strokeDasharray = `${totalCircumference} ${totalCircumference}`;
  document.getElementById('easyCircle').style.strokeDashoffset = totalCircumference - (easyPercentage / 100) * totalCircumference;

  document.getElementById('mediumCircle').style.strokeDasharray = `${totalCircumference} ${totalCircumference}`;
  document.getElementById('mediumCircle').style.strokeDashoffset = totalCircumference - (mediumPercentage / 100) * totalCircumference;

  document.getElementById('hardCircle').style.strokeDasharray = `${totalCircumference} ${totalCircumference}`;
  document.getElementById('hardCircle').style.strokeDashoffset = totalCircumference - (hardPercentage / 100) * totalCircumference;
}



async function main() {
  console.log('Main function started');
  const leetCodeData = await fetchLeetCodeData();
  console.log('LeetCode data fetched:', leetCodeData);
  updateLeetCodeUI(leetCodeData);
  updateLeetCodeProgressCircles(leetCodeData);
  console.log('Main function completed');
}

main();