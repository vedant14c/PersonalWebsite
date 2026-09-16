# Project Changelog

All notable changes to this project will be documented in this file.

---

## [2026-09-16]

### Added
- **`server/src/models/certification.model.js`** — [MODIFIED] Added full CRUD operations: `getCertificationById`, `createCertification`, `updateCertification`, and `deleteCertification`.
- **`server/src/controllers/certification.controller.js`** — [MODIFIED] Added full CRUD handlers: `getCertification`, `createCertification`, `updateCertification`, and `deleteCertification`.
- **`server/src/routes/certification.routes.js`** — [MODIFIED] Added `GET /:id`, `POST /`, `PUT /:id`, and `DELETE /:id` routes for certifications.

---

## [2026-09-15]

### Added
- **`server/src/models/project.model.js`** — [MODIFIED] Added `updateProject` function — UPDATE query with tech_stack JSON serialization.
- **`server/src/controllers/project.controller.js`** — [MODIFIED] Added `updateProject` controller — validates title/description, checks 404, returns updated project.
- **`server/src/routes/project.routes.js`** — [MODIFIED] Added `PUT /:id` route for updating projects.
- **`client/src/pages/AdminProjects.jsx`** — [MODIFIED] Full rewrite — added form state, add/edit toggle, `handleEdit`, `handleSubmit` (POST + PUT), edit buttons on project cards.
- **`client/src/pages/AdminProjects.css`** — [NEW] Dedicated admin projects stylesheet — new class names, tech stack badges, positioned action buttons, form groups/rows, delete button, cancel button, message styling, and responsive layout.
- **`server/src/models/project.model.js`** — [MODIFIED] Added `deleteProject` function — DELETE query returning boolean.
- **`server/src/controllers/project.controller.js`** — [MODIFIED] Added `deleteProject` controller — checks 404, deletes project.
- **`server/src/routes/project.routes.js`** — [MODIFIED] Added `DELETE /:id` route for deleting projects.
- **`client/src/pages/AdminProjects.jsx`** — [MODIFIED] Added `handleDelete` function with confirmation dialog; added Delete button alongside Edit in project cards.
- **`server/src/models/skill.model.js`** — [MODIFIED] Added full CRUD operations: `getSkillById`, `createSkill`, `updateSkill`, and `deleteSkill`.
- **`server/src/controllers/skill.controller.js`** — [MODIFIED] Added `getSkill`, `createSkill`, `updateSkill`, and `deleteSkill` handlers.
- **`server/src/routes/skill.routes.js`** — [MODIFIED] Added `GET /:id`, `POST /`, `PUT /:id`, and `DELETE /:id` routes.
- **`client/src/pages/AdminSkills.jsx`** — [NEW] Skill management page with create, edit, delete, category filters, and live preview cards.
- **`client/src/pages/AdminSkills.css`** — [NEW] Stylesheet for skill admin panel matching modern dark glassmorphic design system.
- **`client/src/App.jsx`** — [MODIFIED] Registered `/admin/skills` route with admin authentication guard.
- **`client/src/pages/AdminDashboard.jsx`** — [MODIFIED] Linked "Manage Skills" button directly to `/admin/skills`.
- **`server/src/models/education.model.js`** — [MODIFIED] Added full CRUD operations: `getEducationById`, `createEducation`, `updateEducation`, and `deleteEducation`.
- **`server/src/controllers/education.controller.js`** — [MODIFIED] Added `getEducationItem`, `createEducation`, `updateEducation`, and `deleteEducation` handlers.
- **`server/src/routes/education.routes.js`** — [MODIFIED] Added `GET /:id`, `POST /`, `PUT /:id`, and `DELETE /:id` routes for education.
- **`client/src/pages/AdminEducation.jsx`** — [NEW] Education management page with create, edit, delete, timeline view, and form validation.
- **`client/src/pages/AdminEducation.css`** — [NEW] Stylesheet for education admin page matching modern dark glassmorphic design system.
- **`client/src/App.jsx`** — [MODIFIED] Registered `/admin/education` route with admin authentication guard.
- **`client/src/pages/AdminDashboard.jsx`** — [MODIFIED] Linked "Manage Education" button directly to `/admin/education`.

---

## [2026-09-11]

### Added
- **`client/public/certificates/`** — [NEW] Created `certificates` folder to store certificate files.
- **`server/src/controllers/admin.controller.js`** — [NEW] Admin controller with `loginAdmin` function.
- **`server/src/routes/admin.routes.js`** — [NEW] Admin routes with `POST /login` endpoint.
- **`server/server.js`** — [MODIFIED] Imported `adminRoutes` and registered at `/api/admin`.
- **`client/src/pages/AdminLogin.jsx`** — [NEW] Admin login page with email/password form.
- **`client/src/pages/AdminDashboard.jsx`** — [NEW] Admin dashboard with data-driven section cards, icons, stats row, and auth guard.
- **`client/src/pages/AdminDashboard.css`** — [NEW] Dedicated admin dashboard stylesheet — radial gradients, glassmorphism header, gradient text, card grid, and responsive breakpoints.
- **`client/src/pages/AdminProjects.jsx`** — [NEW] Admin projects page — fetches and lists projects with Edit/Delete actions and Add Project button.
- **`client/src/App.jsx`** — [MODIFIED] Added `AdminLogin`, `AdminDashboard`, `AdminProjects` imports; `/admin` and `/admin/projects` routes with auth guards.
- **`client/src/App.css`** — [MODIFIED] Cleaned up — admin CSS moved to dedicated AdminDashboard.css.
- **`server/src/models/project.model.js`** — [MODIFIED] Added `createProject` function — INSERT with tech_stack JSON serialization.
- **`server/src/controllers/project.controller.js`** — [MODIFIED] Added `createProject` controller — validates title/description, returns 201.
- **`server/src/routes/project.routes.js`** — [MODIFIED] Added `POST /` route for creating projects.
