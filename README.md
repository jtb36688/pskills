Marketing - Employer Home - Admin Home - Contact/Help

Marketing SubTabs - Marketing Home (About us)

Employer Home Subtabs - View Workers By Facility (DEFAULT) - OPTIONAL: View Workers By Skill - OPTIONAL: View Saved Workers
Admin SubTabs - First login - Make prison, or list prisons if you have them - Admin Home (Default) - Add New Profile - Add New Prison -
Contact/Help SubTabs - Contact Info - OPTIONAL: How to use our services

Par system indicates proficiency - Explained in our 
How to Use section.

Data Structure Prototype-------------------------------------

const prisonsArray = [
  ...prisonsarray,
  {
    name: "",
    location: "",
    adminusers: [],
    workerscount: 0,
    workersarray: [
      ...workersarray,
      {
        name: "",
        workleave: false,
        skills: [],
        resume: ""
      }
    ]
  }
];

Common Occupations-------------------------

Business -
Bookkeeping
Other Business

Cleaning -
Groundskeeping/Landscaping
Building Cleaner
Pest Control
Other Cleaning

Community - 
Mental Health Worker
Food Preperation/Chef
Teacher
Special Education Teacher
Hairstylist/Barber
Other Community

Construction/Trade
Carpenter/Woodworking
Drywall/Ceiling
Electrician
Elevator Repair
Flooring Installer
Insulation Worker
Brick Layer/Masonry Worker
Painter
Plumber
Roofer
Heavy Equipment Operator
Metalworker/Welding

Engineering -
Architecture
Drafting
Other Engineering

Farming/Forestry -
Agricultural Worker
Logging Worker
Other Farming/Forestry

Technology -
Call Center Representative
Graphic Design
Other Technology

MVP Features Breakdown:

This app contains two user types. A prison admin (who has the ability to log in) and a single user (no need to log in so no need for user data to be persisted on this user type) who can view posted profiles by prison.

    Home Page (For potential employer) - No need to log in. Contains a list of prisons who have posted prisoner profiles. Each prison is laid out in a grid format, with the name of the prison, number of people available to work (total number of entries a given prison admin has submitted),  and the physical address/location of the prison.Clicking on a prison takes you to the prisoner profile page.

    Prisoner Profile page MAPPED LIST: Accessed from the home page, non-logged in users can view the list of profiles created by the prison they clicked on.
    
    use bootstrap cards to show each profile on the list.
    have option to list by skill, or list by facility


    Single Profile Page SINGLE ITEM ON LIST: Users can click on a single post to read more of the description.

    Home Page  (For a prison) - If no profile is created, be sure to allow a prison to create a profile and add it to the list of prisons on the general home page. After an admin logs in, they are directed to a page where they can see the people’s profiles they’ve created in a list view, and have options to create new one.

    Create profile page: An admin can create a prisoner’s profile. Should include name, availability (permissions to work in prison only or able to have work leave), and list of skills and/or previous work experience. The profile can be edited and deleted after creation.

    Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.

Stretch Goal: A single user could search for prisons by entering their zip code and defining a search radius. An admin can upload a pdf of a prisoner’s resume. A single user can click a contact us form to inquire about a prisoner.

Project Checklist ------

- Pair Program with UI and Back-End Architect
- Clear, clean file structure
- Incorporate Redux
- Seemless integration of UI Static Landing Page
- Fully Functional SPA Using React Router
- All of CRUD present

Monday Zoom Checklist -----
- Build your own Github Organization and add Team Members there ALL MEMBERS of your team INCLUDING PMS need to have access to your orgs.
- All Project's file structures scaffolded and project architecture decided. 
- Find a template from a site like HTML5 Up and use that templates color scheme/design flow for your app. 