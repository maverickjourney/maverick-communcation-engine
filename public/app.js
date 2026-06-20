const cases = {
  dizzy: {
    title: 'Sarah M. — Urgent: dizziness after workout',
    risk: 'High',
    riskClass: 'risk high',
    message: 'Sarah reported dizziness after her leg workout and said her heart rate felt unusual. She had to sit down for a few minutes.',
    reply: 'Hey Sarah, I saw your check-in. Let’s pause intense training today. Can you tell me if you still feel dizzy, if you ate beforehand, and how much water you had? I’m going to adjust today’s plan to a lighter recovery session.',
    phone: '+15555550123'
  },
  knee: {
    title: 'John R. — Knee pain repeated twice',
    risk: 'Medium',
    riskClass: 'risk',
    message: 'John reported knee pain during squats twice this week. The issue is starting to repeat and should be tracked before the next lower-body session.',
    reply: 'Hey John, I saw the knee pain note. Let’s avoid heavy squats today. I’m going to swap in a lower-impact option and I want you to rate the pain from 1–10 before and after the session.',
    phone: '+15555550124'
  },
  missed: {
    title: 'Maria L. — Missed nutrition logs',
    risk: 'Watch',
    riskClass: 'risk',
    message: 'Maria missed three nutrition logs and has not completed her last two check-ins. This may be a compliance or motivation issue.',
    reply: 'Hey Maria, just checking in. I noticed tracking has been harder this week. No stress — what’s been getting in the way? We can simplify the plan if needed.',
    phone: '+15555550125'
  },
  recovery: {
    title: 'Alex P. — Low recovery trend',
    risk: 'Watch',
    riskClass: 'risk',
    message: 'Alex’s recovery trend is low based on sleep, soreness, and recent training load. The next workout may need to be adjusted.',
    reply: 'Hey Alex, your recovery looks lower today, so I’m going to make today’s session lighter and focus on movement quality. How did you sleep and how sore are you right now?',
    phone: '+15555550126'
  }
};

const inboxItems = document.querySelectorAll('.inbox-item');
const title = document.getElementById('case-title');
const risk = document.getElementById('case-risk');
const message = document.getElementById('case-message');
const reply = document.getElementById('case-reply');
const smsLink = document.getElementById('sms-link');

function setCase(caseId) {
  const selected = cases[caseId];
  if (!selected) return;

  title.textContent = selected.title;
  risk.textContent = selected.risk;
  risk.className = selected.riskClass;
  message.textContent = selected.message;
  reply.textContent = selected.reply;
  smsLink.href = `sms:${selected.phone}?&body=${encodeURIComponent(selected.reply)}`;

  inboxItems.forEach((item) => {
    item.classList.toggle('active', item.dataset.case === caseId);
  });
}

inboxItems.forEach((item) => {
  item.addEventListener('click', () => setCase(item.dataset.case));
});
