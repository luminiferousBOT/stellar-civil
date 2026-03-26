# Stellar Civil: Open Civil Design Suite

Stellar Civil is a high-performance, transparent structural calculation and design platform engineered for civil and structural professionals. It bridges the gap between manual IS code derivations and opaque design software, providing a strictly transparent and verifiable workspace for structural engineering computations.

---

## Executive Overview

The platform is designed to provide structural engineers with a rapid yet rigorous environment for modeling, verifying, and documenting structural design elements. By prioritizing calculation transparency and following a "white-box" philosophy, Stellar Civil ensures that every derivation is traceable to its source code and corresponding engineering principles.

---

## Core Characteristics

### 1. Calculation Transparency
Unlike conventional black-box structural software, Stellar Civil exposes the underlying logic of every calculation. This allows engineers to verify intermediate steps, ensuring compliance with theoretical models and code-specified requirements.

### 2. IS Code Compliance
The suite is built with a primary focus on Indian Standard (IS) codes, providing built-in compliance checks for:
* **IS 456 (2000)**: Plain and Reinforced Concrete - Code of Practice.
* **IS 800 (2007)**: General Construction in Steel - Code of Practice.
* **IS 875 (Parts 1-5)**: Design Loads (Other than Earthquake) for Buildings and Structures.

### 3. Real-time Modelling
Leveraging a modern web-based engine, the platform provides instantaneous feedback on structural parameters. Adjusting geometric or material inputs triggers immediate recalculations, enabling efficient design iterations.

### 4. Professional Documentation
Generates clean, structured outputs suitable for internal audit, peer review, and site documentation.

---

## Technical Architecture

Stellar Civil is architected for speed and reliability, utilizing modern web standards to ensure high performance without the need for heavy plug-ins or local installations.

* **Engine**: Built on Vite 6.x for optimized asset bundling and hot module replacement.
* **Logic**: Implemented in modular Vanilla JavaScript to ensure calculation speed and logic clarity.
* **UI/UX**: Custom CSS-based design system focusing on professional data entry and clear mathematical visualization.
* **Hosting**: Optimized for deployment on high-availability edge networks (e.g., Vercel).

---

## Getting Started

### Prerequisites

* Node.js (Version 18.0.0 or higher)
* npm (Version 9.0.0 or higher)

### Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/luminiferousBOT/stellar-civil.git
   cd stellar-civil
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Launch the development server**:
   ```bash
   npm run dev
   ```

4. **Access the platform**:
   Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```text
stellar-civil/
├── js/                 # Modular design and calculation logic
├── css/                # Professional styling and UI components
├── Code Books/         # Reference documentation and engineering standards
├── index.html          # Main landing and entry point
├── about.html          # Technical background and mission
├── workspace.html      # Primary structural design environment
├── package.json        # Build and dependency configuration
└── vite.config.js      # Build optimization settings
```

---

## Disclaimer

**IMPORTANT: This software is intended for educational and reference purposes only. Structural designs must be verified by a licensed professional engineer (PE) or equivalent authority before implementation. The authors of Stellar Civil assume no liability for structural failures or regulatory non-compliance resulting from the use of this tool. Always cross-verify calculations with primary source IS Code documents.**

---

## License

This project is licensed under the terms of the MIT License. See the [LICENSE](LICENSE) file for the full text.

---

## Author

Developed and maintained by **Devashish Kaushik**.
For professional inquiries or technical support, please contact via [LinkedIn](https://www.linkedin.com/in/devashish-kaushik-31a862271/).
