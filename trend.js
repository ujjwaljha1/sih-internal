const generateTrends = (startValue, endValue, years) => {
    const trends = [];
    const step = (endValue - startValue) / (years - 1);
    for (let i = 0; i < years; i++) {
      const year = 2023 - i;
      const baseValue = startValue + step * i;
      const randomFactor = 0.95 + Math.random() * 0.1; // Random factor between 0.95 and 1.05
      const value = Math.round(baseValue * randomFactor);
      trends.unshift({ year, value });
    }
    return trends;
  };
  const careerData = {
    "Technology": {
      "Problem Solving": [
        {
          jobTitle: "Software Engineer",
          averageSalary: "$92,000",
          description: "Design, develop, and maintain software systems and applications.",
          skills: ["Programming", "Algorithms", "Data Structures", "Software Architecture"],
          companies: ["Google", "Microsoft", "Amazon", "Apple", "Facebook"],
          education: ["Computer Science", "Software Engineering", "Information Technology"],
          workEnvironment: "Office or Remote",
          jobOutlook: "Excellent, with 22% growth expected over the next decade",
          challenges: ["Keeping up with rapidly evolving technologies", "Debugging complex systems", "Meeting tight deadlines"],
          rewards: ["Creating innovative solutions", "High earning potential", "Opportunities for career advancement"],
          topColleges: [
            { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" },
            { name: "Stanford University", fees: "$55,473", duration: "4 years" },
            { name: "Carnegie Mellon University", fees: "$57,560", duration: "4 years" }
        ],
        hiringTrends: generateTrends(15000, 25000, 10),
        salaryTrends: generateTrends(75000, 88000, 10)
      },
        {
          jobTitle: "Data Scientist",
          averageSalary: "$100,000",
          description: "Analyze complex data to help companies make better decisions.",
          skills: ["Machine Learning", "Statistics", "Python", "Data Visualization"],
          companies: ["IBM", "Netflix", "Airbnb", "Uber", "LinkedIn"],
          education: ["Data Science", "Statistics", "Computer Science", "Mathematics"],
          workEnvironment: "Office or Remote",
          jobOutlook: "Very good, with 36% growth expected over the next decade",
          challenges: ["Handling large datasets", "Communicating complex findings to non-technical stakeholders", "Ensuring data privacy and security"],
          rewards: ["Solving real-world problems with data", "High demand across industries", "Intellectual stimulation"],
          topColleges: [
            { name: "Harvard University", fees: "$51,925", duration: "4 years" },
            { name: "University of California, Berkeley", fees: "$44,007", duration: "4 years" },
            { name: "Georgia Institute of Technology", fees: "$33,020", duration: "4 years" }
        ],
        hiringTrends: generateTrends(15000, 25000, 10),
        salaryTrends: generateTrends(75000, 88000, 10)
      },
        {
          jobTitle: "Cybersecurity Analyst",
          averageSalary: "$99,730",
          description: "Protect computer networks and systems from cyber threats and attacks.",
          skills: ["Network Security", "Ethical Hacking", "Risk Analysis", "Incident Response"],
          companies: ["Cisco", "Palo Alto Networks", "FireEye", "CrowdStrike", "Symantec"],
          education: ["Cybersecurity", "Information Security", "Computer Science"],
          workEnvironment: "Office or Remote",
          jobOutlook: "Excellent, with 31% growth expected over the next decade",
          challenges: ["Staying ahead of evolving cyber threats", "Managing security in cloud environments", "Balancing security with user accessibility"],
          rewards: ["Protecting vital information and systems", "High demand and job security", "Continuous learning and growth"],
          topColleges: [
            { name: "Purdue University", fees: "$28,794", duration: "4 years" },
            { name: "Rochester Institute of Technology", fees: "$45,890", duration: "4 years" },
            { name: "University of Maryland", fees: "$36,891", duration: "4 years" }
        ],
        hiringTrends: generateTrends(15000, 25000, 10),
        salaryTrends: generateTrends(75000, 88000, 10)
      },
      ],
      "Creativity": [
        {
          jobTitle: "UX/UI Designer",
          averageSalary: "$85,000",
          description: "Create intuitive and visually appealing user interfaces for digital products.",
          skills: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
          companies: ["Airbnb", "Uber", "Adobe", "Figma", "Spotify"],
          education: ["Graphic Design", "Human-Computer Interaction", "Digital Media"],
          workEnvironment: "Office or Remote",
          jobOutlook: "Good, with 13% growth expected over the next decade",
          challenges: ["Balancing aesthetics with functionality", "Keeping up with design trends and user expectations", "Collaborating with diverse teams"],
          rewards: ["Seeing your designs come to life", "Improving user experiences", "Combining creativity with technology"],
          topColleges: [
            { name: "Rhode Island School of Design", fees: "$52,860", duration: "4 years" },
            { name: "Parsons School of Design", fees: "$49,844", duration: "4 years" },
            { name: "California Institute of the Arts", fees: "$51,466", duration: "4 years" }
        ],
        hiringTrends: generateTrends(15000, 25000, 10),
        salaryTrends: generateTrends(75000, 88000, 10)
      },
        {
          jobTitle: "Game Developer",
          averageSalary: "$79,000",
          description: "Design and program video games for various platforms.",
          skills: ["Game Engines (Unity, Unreal)", "3D Modeling", "Scripting", "Game Design"],
          companies: ["Electronic Arts", "Ubisoft", "Blizzard", "Nintendo", "Rockstar Games"],
          education: ["Game Development", "Computer Science", "Interactive Media"],
          workEnvironment: "Office, with some remote opportunities",
          jobOutlook: "Favorable, with 11% growth expected over the next decade",
          challenges: ["Meeting tight deadlines in a fast-paced industry", "Balancing creativity with technical constraints", "Adapting to rapidly changing gaming trends"],
          rewards: ["Bringing imaginative worlds to life", "Combining passion for gaming with career", "Potential for high-profile projects"],
          topColleges: [
            { name: "University of Southern California", fees: "$58,195", duration: "4 years" },
            { name: "DigiPen Institute of Technology", fees: "$35,000", duration: "4 years" },
            { name: "Rochester Institute of Technology", fees: "$45,890", duration: "4 years" }
        ],
        hiringTrends: generateTrends(15000, 25000, 10),
        salaryTrends: generateTrends(75000, 88000, 10)
      },
        {
          jobTitle: "Digital Animator",
          averageSalary: "$77,700",
          description: "Create animated visual effects for films, TV shows, video games, and other media.",
          skills: ["3D Animation Software", "Character Design", "Storyboarding", "Motion Graphics"],
          companies: ["Pixar", "DreamWorks", "Walt Disney Animation Studios", "Weta Digital", "Industrial Light & Magic"],
          education: ["Animation", "Fine Arts", "Computer Graphics"],
          workEnvironment: "Studios, some remote work possible",
          jobOutlook: "Good, with 16% growth expected over the next decade",
          challenges: ["Mastering complex animation software", "Meeting tight production deadlines", "Staying current with evolving animation techniques"],
          rewards: ["Bringing characters and stories to life", "Working on high-profile entertainment projects", "Combining artistic skills with technology"],
          topColleges: [
            { name: "California Institute of the Arts", fees: "$51,466", duration: "4 years" },
            { name: "Ringling College of Art and Design", fees: "$45,130", duration: "4 years" },
            { name: "Savannah College of Art and Design", fees: "$37,575", duration: "4 years" }
        ],
        hiringTrends: generateTrends(15000, 25000, 10),
        salaryTrends: generateTrends(75000, 88000, 10)
      },
      ],
      "Innovation": [
        {
          jobTitle: "AI Research Scientist",
          averageSalary: "$114,121",
          description: "Develop and improve artificial intelligence algorithms and systems.",
          skills: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"],
          companies: ["Google AI", "OpenAI", "DeepMind", "Microsoft Research", "IBM Research"],
          education: ["PhD in Computer Science", "AI", "Machine Learning"],
          workEnvironment: "Research Labs, Universities, Tech Companies",
          jobOutlook: "Excellent, with 22% growth expected over the next decade",
          challenges: ["Pushing the boundaries of AI capabilities", "Ethical considerations in AI development", "Translating research into practical applications"],
          rewards: ["Contributing to cutting-edge technology", "Potential for groundbreaking discoveries", "High intellectual stimulation"],
          topColleges: [
            { name: "Stanford University", fees: "$55,473", duration: "4-6 years (PhD)" },
            { name: "Carnegie Mellon University", fees: "$57,560", duration: "4-6 years (PhD)" },
            { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4-6 years (PhD)" }
        ],
        hiringTrends: generateTrends(15000, 25000, 10),
        salaryTrends: generateTrends(75000, 88000, 10)
      },
        {
          jobTitle: "Robotics Engineer",
          averageSalary: "$85,620",
          description: "Design, build, and maintain robots for various applications.",
          skills: ["Mechanical Engineering", "Programming", "Control Systems", "Machine Vision"],
          companies: ["Boston Dynamics", "iRobot", "ABB", "FANUC", "Intuitive Surgical"],
          education: ["Robotics Engineering", "Mechanical Engineering", "Electrical Engineering"],
          workEnvironment: "Research Labs, Manufacturing Facilities, Tech Companies",
          jobOutlook: "Very good, with 9% growth expected over the next decade",
          challenges: ["Integrating complex systems", "Ensuring robot safety and reliability", "Adapting to diverse application environments"],
          rewards: ["Creating tangible, interactive technologies", "Potential for significant societal impact", "Working at the forefront of automation"],
          topColleges: [
            { name: "Carnegie Mellon University", fees: "$57,560", duration: "4 years" },
            { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" },
            { name: "University of Michigan", fees: "$52,266", duration: "4 years" }
        ],
        hiringTrends: generateTrends(15000, 25000, 10),
        salaryTrends: generateTrends(75000, 88000, 10)
      }
      ]
    },
    "Medicine": {
      "Empathy": [
        {
          jobTitle: "Pediatrician",
          averageSalary: "$177,000",
          description: "Provide medical care for infants, children, and adolescents.",
          skills: ["Patient Care", "Diagnosis", "Communication", "Pediatric Medicine"],
          companies: ["Children's Hospitals", "Private Practices", "Community Health Centers"],
          education: ["Medical Degree (MD or DO)", "Pediatric Residency"],
          workEnvironment: "Hospitals, Clinics, Private Practices",
          jobOutlook: "Good, with 3% growth expected over the next decade",
          challenges: ["Communicating with young patients and their families", "Staying updated on pediatric health trends", "Managing emotional stress"],
          rewards: ["Making a difference in children's lives", "Building long-term relationships with families", "Diverse and rewarding patient interactions"],
          topColleges: [
            { name: "Harvard Medical School", fees: "$65,203", duration: "4 years" },
            { name: "Johns Hopkins University School of Medicine", fees: "$54,900", duration: "4 years" },
            { name: "University of Pennsylvania Perelman School of Medicine", fees: "$61,586", duration: "4 years" }
        ],
        hiringTrends: generateTrends(15000, 25000, 10),
        salaryTrends: generateTrends(75000, 88000, 10)
      },
        {
          jobTitle: "Mental Health Counselor",
          averageSalary: "$47,000",
          description: "Help individuals, families, and groups manage mental health issues.",
          skills: ["Active Listening", "Counseling Techniques", "Psychological Assessment", "Empathy"],
          companies: ["Mental Health Clinics", "Schools", "Private Practices", "Community Organizations"],
          education: ["Master's in Counseling or Psychology", "State Licensure"],
          workEnvironment: "Offices, Clinics, Schools, or Remote (Teletherapy)",
          jobOutlook: "Excellent, with 23% growth expected over the next decade",
          challenges: ["Managing emotional boundaries", "Addressing diverse mental health needs", "Keeping up with evolving treatment methods"],
          rewards: ["Helping people overcome challenges", "Promoting mental wellness", "Flexible career options"],
          topColleges: [
            { name: "Columbia University", fees: "$48,390", duration: "2 years" },
            { name: "New York University", fees: "$45,426", duration: "2 years" },
            { name: "University of California, Los Angeles", fees: "$28,000", duration: "2 years" }
        ],
        hiringTrends: generateTrends(15000, 25000, 10),
        salaryTrends: generateTrends(75000, 88000, 10)
      },
        {
          jobTitle: "Nurse Practitioner",
          averageSalary: "$111,680",
          description: "Provide advanced nursing care and can prescribe medication in most states.",
          skills: ["Patient Assessment", "Diagnosis", "Treatment Planning", "Health Education"],
          companies: ["Hospitals", "Private Practices", "Community Health Centers", "Urgent Care Clinics"],
          education: ["Master of Science in Nursing", "Nurse Practitioner Certification"],
          workEnvironment: "Various Healthcare Settings",
          jobOutlook: "Excellent, with 45% growth expected over the next decade",
          challenges: ["Managing complex patient cases", "Staying updated with medical advancements", "Balancing autonomy and collaboration with physicians"],
          rewards: ["High level of patient care autonomy", "Strong job security and growth", "Opportunity to specialize in various fields"],
          topColleges: [
            { name: "Johns Hopkins University", fees: "$54,900", duration: "2 years" },
            { name: "University of Pennsylvania", fees: "$61,586", duration: "2 years" },
            { name: "Duke University", fees: "$55,888", duration: "2 years" }
        ],
        hiringTrends: generateTrends(15000, 25000, 10),
        salaryTrends: generateTrends(75000, 88000, 10)
      },
      ],
      "Analytical Thinking": [
        {
          jobTitle: "Medical Researcher",
          averageSalary: "$88,000",
          description: "Conduct research to improve human health and medical treatments.",
          skills: ["Research Design", "Data Analysis", "Laboratory Techniques", "Scientific Writing"],
          companies: ["Pharmaceutical Companies", "Research Institutions", "Universities", "Government Agencies"],
          education: ["PhD in Biomedical Sciences or related field", "Medical Degree for some positions"],
          workEnvironment: "Laboratories, Research Facilities",
          jobOutlook: "Good, with 6% growth expected over the next decade",
          challenges: ["Securing research funding", "Publishing in competitive journals", "Translating research into practical applications"],
          rewards: ["Contributing to medical breakthroughs", "Intellectual stimulation", "Potential for global impact"],
          topColleges: [
            { name: "Stanford University School of Medicine", fees: "$56,229", duration: "4-6 years" },
            { name: "University of California, San Francisco", fees: "$35,148", duration: "4-6 years" },
            { name: "Washington University in St. Louis", fees: "$58,460", duration: "4-6 years" }
          ]
        },
        {
          jobTitle: "Biostatistician",
          averageSalary: "$92,000",
          description: "Apply statistical methods to analyze health-related data.",
          skills: ["Statistical Analysis", "Data Modeling", "Programming (R, SAS, Python)", "Study Design"],
          companies: ["Pharmaceutical Companies", "Research Institutions", "Government Health Agencies", "Hospitals"],
          education: ["Master's or PhD in Biostatistics or Statistics"],
          workEnvironment: "Offices, Research Centers",
          jobOutlook: "Excellent, with 33% growth expected over the next decade",
          challenges: ["Handling large and complex datasets", "Communicating statistical findings to non-experts", "Ensuring data integrity and validity"],
          rewards: ["Contributing to evidence-based medicine", "Diverse application areas", "High demand across health sectors"],
          topColleges: [
            { name: "Harvard T.H. Chan School of Public Health", fees: "$63,440", duration: "2 years" },
            { name: "Johns Hopkins Bloomberg School of Public Health", fees: "$62,592", duration: "2 years" },
            { name: "University of Michigan School of Public Health", fees: "$47,006", duration: "2 years" }
        ]
      },
      {
        jobTitle: "Epidemiologist",
        averageSalary: "$74,560",
        description: "Study patterns and causes of diseases in human populations.",
        skills: ["Data Analysis", "Research Methodology", "Public Health Knowledge", "Statistical Software"],
        companies: ["Centers for Disease Control and Prevention", "World Health Organization", "Universities", "State Health Departments"],
        education: ["Master's or PhD in Epidemiology or Public Health"],
        workEnvironment: "Government Agencies, Research Institutions, Universities",
        jobOutlook: "Good, with 30% growth expected over the next decade",
        challenges: ["Analyzing complex health data", "Responding to public health emergencies", "Communicating findings to policymakers and the public"],
        rewards: ["Contributing to disease prevention and control", "Potential for global impact", "Diverse research opportunities"],
        topColleges: [
          { name: "Johns Hopkins Bloomberg School of Public Health", fees: "$62,592", duration: "2 years" },
          { name: "Harvard T.H. Chan School of Public Health", fees: "$63,440", duration: "2 years" },
          { name: "Columbia University Mailman School of Public Health", fees: "$48,390", duration: "2 years" }
        ]
      }
    ],
    "Precision and Dexterity": [
      {
        jobTitle: "Surgeon",
        averageSalary: "$409,665",
        description: "Perform operations to treat injuries, diseases, and deformities.",
        skills: ["Surgical Techniques", "Anatomy Knowledge", "Decision Making", "Hand-eye Coordination"],
        companies: ["Hospitals", "Surgical Centers", "Private Practices"],
        education: ["Medical Degree", "Surgical Residency", "Fellowship for Specialization"],
        workEnvironment: "Hospitals, Operating Rooms",
        jobOutlook: "Good, with 3% growth expected over the next decade",
        challenges: ["High-stress environment", "Long and irregular hours", "Continuous learning of new surgical techniques"],
        rewards: ["Directly saving and improving lives", "High earning potential", "Respect and prestige"],
        topColleges: [
          { name: "Johns Hopkins University School of Medicine", fees: "$54,900", duration: "4 years + 5-7 years residency" },
          { name: "Harvard Medical School", fees: "$65,203", duration: "4 years + 5-7 years residency" },
          { name: "Stanford University School of Medicine", fees: "$56,229", duration: "4 years + 5-7 years residency" }
        ]
      },
      {
        jobTitle: "Dentist",
        averageSalary: "$164,010",
        description: "Diagnose and treat problems with patients' teeth, gums, and related parts of the mouth.",
        skills: ["Dental Procedures", "Patient Care", "Manual Dexterity", "Diagnostic Skills"],
        companies: ["Private Practices", "Dental Clinics", "Hospitals"],
        education: ["Doctor of Dental Surgery (DDS) or Doctor of Dental Medicine (DMD)"],
        workEnvironment: "Dental Offices, Clinics",
        jobOutlook: "Good, with 3% growth expected over the next decade",
        challenges: ["Managing patient anxiety", "Staying updated with dental technologies", "Running a business (for private practice)"],
        rewards: ["Improving oral health and smiles", "Potential for owning a practice", "Regular working hours"],
        topColleges: [
          { name: "University of Michigan School of Dentistry", fees: "$52,266", duration: "4 years" },
          { name: "Harvard School of Dental Medicine", fees: "$65,203", duration: "4 years" },
          { name: "University of California, San Francisco School of Dentistry", fees: "$35,148", duration: "4 years" }
        ]
      }
    ]
  },
  "Business": {
    "Leadership": [
      {
        jobTitle: "Management Consultant",
        averageSalary: "$87,000",
        description: "Advise organizations on improving their performance and operations.",
        skills: ["Strategic Thinking", "Problem-Solving", "Business Analysis", "Project Management"],
        companies: ["McKinsey & Company", "Boston Consulting Group", "Bain & Company", "Deloitte", "Accenture"],
        education: ["MBA or related Master's degree", "Bachelor's degree for entry-level positions"],
        workEnvironment: "Office and Client Sites, Frequent Travel",
        jobOutlook: "Good, with 14% growth expected over the next decade",
        challenges: ["Adapting to diverse client environments", "Managing tight project deadlines", "Balancing multiple client engagements"],
        rewards: ["Exposure to various industries", "High earning potential", "Rapid career progression"],
        topColleges: [
          { name: "Harvard Business School", fees: "$73,440", duration: "2 years" },
          { name: "Stanford Graduate School of Business", fees: "$74,706", duration: "2 years" },
          { name: "Wharton School of the University of Pennsylvania", fees: "$81,378", duration: "2 years" }
        ]
      },
      {
        jobTitle: "Entrepreneur",
        averageSalary: "Varies widely",
        description: "Start and run your own business ventures.",
        skills: ["Business Planning", "Financial Management", "Marketing", "Networking"],
        companies: "Self-employed, various startups",
        education: ["No specific requirement, but business education can be beneficial"],
        workEnvironment: "Varied - Office, Remote, On-site",
        jobOutlook: "Dependent on economic conditions and individual success",
        challenges: ["Securing funding", "Managing all aspects of a business", "Dealing with uncertainty and risk"],
        rewards: ["Being your own boss", "Potential for high financial returns", "Bringing innovative ideas to life"],
        topColleges: [
          { name: "Babson College", fees: "$52,608", duration: "4 years" },
          { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" },
          { name: "Stanford University", fees: "$55,473", duration: "4 years" }
        ]
      },
      {
        jobTitle: "Chief Executive Officer (CEO)",
        averageSalary: "$193,850",
        description: "Provide overall direction and strategy for an organization.",
        skills: ["Strategic Planning", "Leadership", "Decision Making", "Financial Management"],
        companies: "All major corporations and many smaller businesses",
        education: ["MBA or related Master's degree", "Significant industry experience"],
        workEnvironment: "Corporate Offices, Some Travel",
        jobOutlook: "Stable, with 4% growth expected over the next decade",
        challenges: ["Managing diverse stakeholder interests", "Navigating complex business environments", "Maintaining company growth and profitability"],
        rewards: ["High level of influence", "Substantial compensation packages", "Opportunity to shape organizational direction"],
        topColleges: [
          { name: "Harvard Business School", fees: "$73,440", duration: "2 years" },
          { name: "Stanford Graduate School of Business", fees: "$74,706", duration: "2 years" },
          { name: "INSEAD", fees: "€89,000", duration: "1 year" }
        ]
      }
    ],
    "Communication": [
      {
        jobTitle: "Marketing Manager",
        averageSalary: "$136,000",
        description: "Develop and implement marketing strategies to promote products or services.",
        skills: ["Marketing Strategy", "Brand Management", "Digital Marketing", "Analytics"],
        companies: ["Procter & Gamble", "Unilever", "Coca-Cola", "Nike", "Apple"],
        education: ["Bachelor's or Master's in Marketing, Business, or related field"],
        workEnvironment: "Corporate Offices, Some Remote Work",
        jobOutlook: "Good, with 10% growth expected over the next decade",
        challenges: ["Keeping up with rapidly changing digital landscape", "Measuring marketing ROI", "Managing diverse marketing channels"],
        rewards: ["Creative expression in business context", "Opportunity to influence consumer behavior", "Dynamic and evolving field"],
        topColleges: [
          { name: "Northwestern University (Kellogg)", fees: "$74,468", duration: "2 years" },
          { name: "University of Pennsylvania (Wharton)", fees: "$81,378", duration: "2 years" },
          { name: "Columbia Business School", fees: "$77,376", duration: "2 years" }
        ]
      },
      {
        jobTitle: "Public Relations Specialist",
        averageSalary: "$62,000",
        description: "Manage the public image of organizations or individuals.",
        skills: ["Media Relations", "Crisis Management", "Writing", "Social Media Management"],
        companies: ["PR Agencies", "Corporations", "Non-profit Organizations", "Government Agencies"],
        education: ["Bachelor's in Public Relations, Communications, or Journalism"],
        workEnvironment: "Offices, Some Remote Work, Event Venues",
        jobOutlook: "Stable, with 11% growth expected over the next decade",
        challenges: ["Managing public perception during crises", "Adapting to changing media landscapes", "Measuring PR impact"],
        rewards: ["Shaping public narratives", "Diverse and dynamic work environments", "Opportunity for high-profile projects"],
        topColleges: [
          { name: "University of Southern California", fees: "$58,195", duration: "4 years" },
          { name: "New York University", fees: "$53,308", duration: "4 years" },
          { name: "Boston University", fees: "$55,892", duration: "4 years" }
        ]
      },
      {
        jobTitle: "Sales Manager",
        averageSalary: "$126,640",
        description: "Lead and guide a team of sales representatives to meet company revenue goals.",
        skills: ["Sales Strategy", "Team Leadership", "Customer Relationship Management", "Negotiation"],
        companies: ["Oracle", "Salesforce", "IBM", "Microsoft", "ADP"],
        education: ["Bachelor's in Business, Marketing, or related field"],
        workEnvironment: "Offices, Client Sites, Some Travel",
        jobOutlook: "Average, with 4% growth expected over the next decade",
        challenges: ["Meeting aggressive sales targets", "Motivating and developing sales teams", "Adapting to changing customer needs and market conditions"],
        rewards: ["High earning potential with commissions", "Dynamic and goal-oriented environment", "Opportunity to directly impact company growth"],
        topColleges: [
          { name: "University of Pennsylvania (Wharton)", fees: "$81,378", duration: "4 years" },
          { name: "Michigan State University", fees: "$39,766", duration: "4 years" },
          { name: "Indiana University (Kelley)", fees: "$36,512", duration: "4 years" }
        ]
      }
    ],
    "Financial Acumen": [
      {
        jobTitle: "Financial Analyst",
        averageSalary: "$83,660",
        description: "Provide guidance to businesses and individuals making investment decisions.",
        skills: ["Financial Modeling", "Data Analysis", "Market Research", "Financial Reporting"],
        companies: ["JPMorgan Chase", "Goldman Sachs", "Morgan Stanley", "BlackRock", "Vanguard"],
        education: ["Bachelor's in Finance, Accounting, Economics, or related field"],
        workEnvironment: "Offices, Some Remote Work",
        jobOutlook: "Good, with 6% growth expected over the next decade",
        challenges: ["Analyzing complex financial data", "Staying updated with market trends", "Making accurate financial projections"],
        rewards: ["Intellectual stimulation", "Potential for high earnings", "Opportunity to influence major financial decisions"],
        topColleges: [
          { name: "New York University (Stern)", fees: "$53,308", duration: "4 years" },
          { name: "University of Pennsylvania (Wharton)", fees: "$81,378", duration: "4 years" },
          { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" }
        ]
      },
      {
        jobTitle: "Investment Banker",
        averageSalary: "$101,420",
        description: "Help companies and governments raise capital by issuing and selling securities.",
        skills: ["Financial Modeling", "Valuation", "Mergers & Acquisitions", "Client Relationship Management"],
        companies: ["Goldman Sachs", "JPMorgan Chase", "Morgan Stanley", "Citigroup", "Bank of America Merrill Lynch"],
        education: ["Bachelor's in Finance, Economics, or related field; MBA often preferred"],
        workEnvironment: "Offices, Long Hours",
        jobOutlook: "Average, with 4% growth expected over the next decade",
        challenges: ["High-pressure work environment", "Long and irregular hours", "Intense competition"],
        rewards: ["Very high earning potential", "Exposure to high-profile deals", "Rapid career progression"],
        topColleges: [
          { name: "University of Pennsylvania (Wharton)", fees: "$81,378", duration: "4 years" },
          { name: "New York University (Stern)", fees: "$53,308", duration: "4 years" },
          { name: "Harvard University", fees: "$51,925", duration: "4 years" }
        ]
      }
    ]
  },
  "Education": {
    "Teaching": [
      {
        jobTitle: "Elementary School Teacher",
        averageSalary: "$60,660",
        description: "Educate young students in basic subjects like math, reading, and science.",
        skills: ["Classroom Management", "Curriculum Development", "Communication", "Patience"],
        companies: ["Public School Districts", "Private Schools", "Charter Schools"],
        education: ["Bachelor's in Elementary Education", "Teaching Certification"],
        workEnvironment: "Schools, Classrooms",
        jobOutlook: "Average, with 4% growth expected over the next decade",
        challenges: ["Managing diverse learning needs", "Adapting to educational policy changes", "Balancing teaching with administrative tasks"],
        rewards: ["Shaping young minds", "Long summer breaks", "Job stability"],
        topColleges: [
          { name: "Vanderbilt University (Peabody)", fees: "$52,070", duration: "4 years" },
          { name: "University of Michigan", fees: "$52,266", duration: "4 years" },
          { name: "Teachers College, Columbia University", fees: "$48,390", duration: "2 years (Master's)" }
        ]
      },
      {
        jobTitle: "University Professor",
        averageSalary: "$80,560",
        description: "Teach courses in their field of expertise at the college or university level.",
        skills: ["Research", "Lecturing", "Grant Writing", "Publishing"],
        companies: ["Universities", "Colleges", "Community Colleges"],
        education: ["PhD in the relevant field"],
        workEnvironment: "Universities, Research Facilities",
        jobOutlook: "Good, with 12% growth expected over the next decade",
        challenges: ["Balancing teaching and research", "Securing research funding", "Publishing in competitive academic journals"],
        rewards: ["Intellectual stimulation", "Academic freedom", "Opportunity to shape future professionals"],
        topColleges: [
          { name: "Stanford University", fees: "$55,473", duration: "5-7 years (PhD)" },
          { name: "Harvard University", fees: "$51,925", duration: "5-7 years (PhD)" },
          { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "5-7 years (PhD)" }
        ]
      }
    ],
    "Curriculum Development": [
      {
        jobTitle: "Instructional Designer",
        averageSalary: "$66,290",
        description: "Create educational experiences and instructional materials for various learning environments.",
        skills: ["Curriculum Design", "E-learning Technologies", "Educational Psychology", "Project Management"],
        companies: ["Educational Technology Companies", "Universities", "Corporate Training Departments"],
        education: ["Master's in Instructional Design, Educational Technology, or related field"],
        workEnvironment: "Offices, Remote Work",
        jobOutlook: "Good, with 6% growth expected over the next decade",
        challenges: ["Keeping up with evolving educational technologies", "Designing for diverse learning styles", "Measuring learning outcomes"],
        rewards: ["Creating impactful learning experiences", "Combining creativity with education", "Potential for remote work"],
        topColleges: [
          { name: "Florida State University", fees: "$21,683", duration: "2 years (Master's)" },
          { name: "Indiana University", fees: "$36,512", duration: "2 years (Master's)" },
          { name: "University of Georgia", fees: "$27,658", duration: "2 years (Master's)" }
        ]
      },
      {
        jobTitle: "Education Policy Analyst",
        averageSalary: "$63,270",
        description: "Analyze and develop educational policies to improve educational systems.",
        skills: ["Policy Analysis", "Research", "Data Analysis", "Report Writing"],
        companies: ["Government Education Departments", "Think Tanks", "Non-profit Organizations"],
        education: ["Master's in Education Policy, Public Policy, or related field"],
        workEnvironment: "Offices, Some Remote Work",
        jobOutlook: "Average, with 5% growth expected over the next decade",
        challenges: ["Navigating complex political landscapes", "Balancing diverse stakeholder interests", "Implementing effective policy changes"],
        rewards: ["Influencing education on a systemic level", "Contributing to educational equity", "Engaging in meaningful policy debates"],
        topColleges: [
          { name: "Harvard Graduate School of Education", fees: "$51,925", duration: "1 year (Master's)" },
          { name: "Stanford Graduate School of Education", fees: "$55,473", duration: "1 year (Master's)" },
          { name: "Teachers College, Columbia University", fees: "$48,390", duration: "2 years (Master's)" }
        ]
      }
    ]
  }
};
