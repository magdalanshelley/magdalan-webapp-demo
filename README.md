# 8th Street Rental Management System (8th Street RMS)

## Overview

The 8th Street Rental Management System (8th Street RMS) is a web-based rental management platform developed to streamline the management of boarding house rooms and rental spaces. The system enables administrators to efficiently manage rental units, tenant records, reservations, payment transactions, occupancy monitoring, and reporting through a centralized dashboard.

The system was developed as a Capstone Project and is designed specifically for properties with a fixed inventory of rental units.

---

## Key Features

### Dashboard

* Real-time occupancy monitoring
* Monthly income tracking
* Recent payment activity
* Quick summary of rental operations

### Rental Units Management

* Manage all rental units in a centralized inventory
* Monitor unit status (Available, Reserved, Occupied)
* Update rental rates and unit information

### Tenant Management

* Register and maintain tenant records
* Assign tenants to rental units
* View tenant payment history and account balances

### Reservation Management

* Record incoming reservations
* Automatically synchronize reserved units with rental inventory
* Track reservation status and details

### Payment Management

* Record rental payments
* Support full and partial payments
* Automatically calculate remaining balances
* Maintain complete payment history per tenant

### Reports and Analytics

* Occupancy reports
* Revenue summaries
* Unit inventory reports
* Financial performance monitoring

---

## Technology Stack

### Frontend

* React.js
* JavaScript
* CSS3
* React Router DOM

### Backend

* Supabase

### Database

* PostgreSQL

### Hosting and Deployment

* Vercel

### Development Tools

* Visual Studio Code
* Git
* GitHub

---

## System Workflow

Rental Unit → Reservation → Tenant Assignment → Payment Recording → Reports and Analytics

The system automatically synchronizes information across modules to ensure data consistency and minimize redundant data entry.

---

## Installation Guide

### Clone the Repository

```bash
git clone <repository-url>
cd 8th-street-rms
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file and add:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## User Roles

### Administrator

The administrator can:

* Manage rental units
* Manage reservations
* Manage tenant records
* Record payments
* Generate reports
* Monitor occupancy and revenue

---

## Database Tables

### rooms

Stores rental unit information.

### tenants

Stores tenant records and assignments.

### reservations

Stores reservation transactions.

### payments

Stores payment history, balances, and payment status.

---

## Future Enhancements

* Tenant portal
* Online payment integration
* SMS and email notifications
* Automated billing reminders
* Financial report export (PDF and Excel)
* Mobile-responsive optimization

---

## Developers

ASH - Shelley Magdalan, Angeline Kaquilala

System Analysis and Design

2026
