CREATE DATABASE IF NOT EXISTS personal_website;

USE personal_website;

-- =========================================
-- PROJECTS
-- =========================================

CREATE TABLE projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    tech_stack JSON,
    github_url VARCHAR(500),
    live_url VARCHAR(500),
    image_url VARCHAR(500),
    is_featured BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================================
-- SKILLS
-- =========================================

CREATE TABLE skills (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    display_order INT DEFAULT 0
);


-- =========================================
-- EDUCATION
-- =========================================

CREATE TABLE education (
    id INT PRIMARY KEY AUTO_INCREMENT,
    degree VARCHAR(255) NOT NULL,
    institution VARCHAR(255) NOT NULL,
    start_date DATE,
    end_date DATE,
    percentage DECIMAL(5,2),
    description TEXT,
    display_order INT DEFAULT 0
);


-- =========================================
-- EXPERIENCE
-- =========================================

CREATE TABLE experience (
    id INT PRIMARY KEY AUTO_INCREMENT,
    company VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    start_date DATE,
    end_date DATE,
    description TEXT,
    display_order INT DEFAULT 0
);


-- =========================================
-- CERTIFICATIONS
-- =========================================

CREATE TABLE certifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    issuer VARCHAR(255),
    issue_date DATE,
    credential_url VARCHAR(500),
    display_order INT DEFAULT 0
);


-- =========================================
-- CONTACT MESSAGES
-- =========================================

CREATE TABLE messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);