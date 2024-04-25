function arrayToCSV(array) {
    return array.map(item => {
        if (Array.isArray(item)) {
            return item.map(subItem => subItem ? subItem.toString() : '').join(", ");
        }
        return item ? item.toString() : '';
    }).join(", ");
}

function educationExperienceToCSV(items) {
    return items.map(item => [
        item.institution || '',
        item.degree || '',
        item.location || '',
        item.graduationYear || '',
        item.gpa || ''
    ].join(", ")).join("; ");
}

function experienceToCSV(items) {
    return items.map(item => [
        item.title || '',
        item.company || '',
        (item.from && item.from.$date) ? new Date(item.from.$date).getFullYear().toString() : '',
        (item.to && item.to.$date) ? new Date(item.to.$date).getFullYear().toString() : '',
        item.rolesResponsibilities || ''
    ].join(", ")).join("; ");
}

function jobRecruiter(Skills_Needed, Job_Description, Job_Requirements, Job_Type, Years_of_Experience, Education, Experience, Skills, Cover_Letter) {
    var skillsNeededStr = arrayToCSV(Skills_Needed);
    var jobRequirementsStr = arrayToCSV(Job_Requirements);
    var skillsStr = arrayToCSV(Skills);

    // var education = JSON.parse(Education); 
    var educationStr = educationExperienceToCSV(Education);
    // var experience = JSON.parse(Experience); 
    var experienceStr = experienceToCSV(Experience);

    var cleanedSkillsNeeded = cleanText(skillsNeededStr);
    var cleanedJobDescription = cleanText(Job_Description);
    var cleanedJobRequirements = cleanText(jobRequirementsStr);
    var cleanedJobType = cleanText(Job_Type);
    var cleanedEducation = cleanText(educationStr);
    var cleanedExperience = cleanText(experienceStr);
    var cleanedSkills = cleanText(skillsStr);
    var cleanedCoverLetter = cleanText(Cover_Letter);

    var matchScore = calculateMatchScore(cleanedSkillsNeeded, cleanedJobDescription, cleanedJobRequirements, cleanedJobType, Years_of_Experience, cleanedEducation, cleanedExperience, cleanedSkills, cleanedCoverLetter);
    return matchScore;
}

function calculateMatchScore(Skills_Needed, Job_Description, Job_Requirements, Job_Type, Years_of_Experience, Education, Experience, Skills, Cover_Letter) {
    var textSimilarityScore = calculateTextSimilarity(Skills_Needed, Job_Description, Job_Requirements, Education, Experience, Skills, Cover_Letter);
    var keywordMatchingScore = calculateKeywordMatching(Skills_Needed, Job_Description, Job_Requirements, Education, Experience, Skills, Cover_Letter);
    
    var matchScore = (textSimilarityScore + keywordMatchingScore) / 2;
    return matchScore;
}

function cleanText(inputText) {
    if (!inputText) return '';
    return inputText.replace(/<\/?[^>]+(>|$)/g, "")
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\[\]"']/g, "")
                    .split(/\s+/)
                    .filter(word => !stopWords[word.toLowerCase()])
                    .join(' ')
                    .toLowerCase();
}

function calculateTextSimilarity(Skills_Needed, Job_Description, Job_Requirements, Education, Experience, Skills, Cover_Letter) {
    var allTexts = Skills_Needed + " " + Job_Description + " " + Job_Requirements + " " + Education + " " + Experience + " " + Skills + " " + Cover_Letter;
    var vocabulary = buildVocabulary(allTexts);
    var vectorizedJob = vectorizeText(Job_Description + " " + Job_Requirements + " " + Skills_Needed, vocabulary);
    var vectorizedApplicant = vectorizeText(Education + " " + Experience + " " + Skills + " " + Cover_Letter, vocabulary);
    return cosineSimilarity(vectorizedJob, vectorizedApplicant) * 100; // scale to percentage
}

function buildVocabulary(texts) {
    var vocab = {};
    texts.split(/\s+/).forEach(token => {
        vocab[token] = true;
    });
    return Object.keys(vocab);
}

function vectorizeText(text, vocabulary) {
    var vector = new Array(vocabulary.length).fill(0);
    text.split(/\s+/).forEach(token => {
        var index = vocabulary.indexOf(token);
        if (index !== -1) {
            vector[index]++;
        }
    });
    return vector;
}

function cosineSimilarity(vec1, vec2) {
    var dot = 0, mag1 = 0, mag2 = 0;
    for (var i = 0; i < vec1.length; i++) {
        dot += vec1[i] * vec2[i];
        mag1 += vec1[i] ** 2;
        mag2 += vec2[i] ** 2;
    }
    return mag1 === 0 || mag2 === 0 ? 0 : dot / (Math.sqrt(mag1) * Math.sqrt(mag2));
}

function calculateKeywordMatching(Skills_Needed, Job_Description, Job_Requirements, Education, Experience, Skills, Cover_Letter) {
    var jobText = Skills_Needed + " " + Job_Description + " " + Job_Requirements;
    var applicantText = Education + " " + Experience + " " + Skills + " " + Cover_Letter;
    var jobTokens = new Set(jobText.split(/\s+/));
    var applicantTokens = new Set(applicantText.split(/\s+/));
    var match = [...jobTokens].filter(x => applicantTokens.has(x));
    return (match.length / jobTokens.size) * 100; // percentage of match
}

const stopWords = {
    "i": true, "me": true, "my": true, "myself": true, "we": true, "our": true, "ours": true,
    "ourselves": true, "you": true, "your": true, "yours": true, "yourself": true, "yourselves": true,
    "he": true, "him": true, "his": true, "himself": true, "she": true, "her": true, "hers": true,
    "herself": true, "it": true, "its": true, "itself": true, "they": true, "them": true, "their": true,
    "theirs": true, "themselves": true, "what": true, "which": true, "who": true, "whom": true,
    "this": true, "that": true, "these": true, "those": true, "am": true, "is": true, "are": true,
    "was": true, "were": true, "be": true, "been": true, "being": true, "have": true, "has": true,
    "had": true, "having": true, "do": true, "does": true, "did": true, "doing": true, "a": true,
    "an": true, "the": true, "and": true, "but": true, "if": true, "or": true, "because": true,
    "as": true, "until": true, "while": true, "of": true, "at": true, "by": true, "for": true,
    "with": true, "about": true, "against": true, "between": true, "into": true, "through": true,
    "during": true, "before": true, "after": true, "above": true, "below": true, "to": true,
    "from": true, "up": true, "down": true, "in": true, "out": true, "on": true, "off": true,
    "over": true, "under": true, "again": true, "further": true, "then": true, "once": true,
    "here": true, "there": true, "when": true, "where": true, "why": true, "how": true, "all": true,
    "any": true, "both": true, "each": true, "few": true, "more": true, "most": true, "other": true,
    "some": true, "such": true, "no": true, "nor": true, "not": true, "only": true, "own": true,
    "same": true, "so": true, "than": true, "too": true, "very": true, "s": true, "t": true,
    "can": true, "will": true, "just": true, "don": true, "should": true, "now": true
};

module.exports.jobRecruiter = jobRecruiter;