# Astawash Platform Flow Map

This diagram illustrates the user journey through the Astawash platform, highlighting how the different pages connect to create a seamless booking experience.

```mermaid
graph TD
    %% Entry Point
    Start((User Entry)) --> Landing[Platform Landing /]
    
    %% Sector Selection
    Landing --> |Select Healthcare| HealthHub[Healthcare Hub /healthcare]
    Landing --> |Select Other| Fuel[Fuel Station /coming-soon]
    
    %% Healthcare Discovery
    HealthHub --> |Search All| Selection[Selection Page /selection]
    HealthHub --> |Select Specialty| Selection
    HealthHub --> |Help Me Choose| Triage[Smart Triage Modal]
    
    %% Selection & Filtering
    Triage --> |Recommendation| Selection
    Selection --> |Filter: Public/Private| Selection
    Selection --> |Click Facility| Booking[Booking Page /booking/:id]
    
    %% Booking Action
    Booking --> |Choose Date| SlotSelect[Time Slot Selection]
    SlotSelect --> |Confirm| Success[Appointment Confirmed]
    
    %% Navigation
    Success --> Dashboard[My Appointments /appointments]
    
    %% Global Nav
    BottomNav[Bottom Navigation] -.-> Landing
    BottomNav -.-> Dashboard
    BottomNav -.-> Profile[User Profile /profile]

    style Start fill:#2563EB,color:#fff
    style Success fill:#10B981,color:#fff
    style Triage fill:#F59E0B,color:#fff
    style HealthHub stroke:#2563EB,stroke-width:2px
```

### Key Stages in the Flow:

1.  **Platform Landing**: The high-level entry where users choose between Healthcare, Government, or Finance sectors.
2.  **Healthcare Hub**: A dedicated space to identify the *type* of care needed (General, Dental, etc.).
3.  **Selection Page**: A filtered list of specific hospitals or clinics. This is the "bridge" between discovery and action.
4.  **Booking Page**: The final step where users interact with the schedule and secure their spot.
5.  **Global Navigation**: The Bottom Nav allows users to jump between their active appointments, their profile, and the home screen at any time.
