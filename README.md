# Aspire Challenge App (ReactNative)


### Project Setup
`yarn run init`

### Project Run
`yarn run ios` or `yarn run android`

### User Stories

- **ASPIRE-101 Create Dashboard with Bottom Tabs**
  
  **Description:** Need to create a Dashboard screen with bottom tab layout containing following 5 bottom tabs in total:
    - `Home`
    - `Debit Card`
    - `Payments`
    - `Creds`
    - `Profile`
  
  **Story Points:** 2
  
  **Status:** Open

  ---

- **ASPIRE-102 Create Debit Card Screen**
  
  **Description:** Need to create a Debit Card screen that should show up when user selects the `Debit Card` tab on the Dashboard screen. 
  
  It should display following user informations:
    - User's Debit Card with hide card number option
    - User's Debit Card spending limit.

  It should provide following CTA options to the user:
    - Top-up account
    - Weekly spend limit (Toggle Button)
        - If enabled, should take user to the Spending Limit screen
    - Freeze card (Toggle Button)
    - Get a new card
    - Deactivated cards
  
  **Story Points:** 3
  
  **Status:** Open

---

- **ASPIRE-103 Create Spending Limit Screen**

  **Description:** If user turn on the weekly limit option on the Debit Card screen, Spending Limit Screen will show up that will asks user to enter a amount to be set for weekly limit for his/her Debit card.

  It should ask for following information to be entered:

    - Amount in `S$` to be set as Weekly limit

  It should provide following CTA options to the user:
    - Quick Select options `5000`, `10000` & `20000` in `S$`<br>
        This will auto enter the suggested amount.
    - Save<br>
        This will update the weekly limit for the user's debit card.
  
  **Story Points:** 2
  
  **Status:** Open


  ---





