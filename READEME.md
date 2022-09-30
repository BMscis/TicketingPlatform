
# SMARTSEAT TICKETING PLATFORM
A simple but powerful blockchain solution to tackle high ticket prices for live events implemented in Reach and designed for Algorand and Ethereum.
## Milestones for the next month.
The goal of the next month is to flesh out a practical and robust application that can be used to showcase the potential of SmartSeat ticketing. Here we will lay down the building blocks that can be built upon to create a fully fledged blockchain DApp.
- ## Week 1
    The core functionality is to develop a smart contract that :
    - Allows a participant (A venue/An artist) to sell tickets for an event (Online/Live).
        -  The tickets may be available for a fixed amount of time / The tickets may be available until all the tickets are sold.
        -   The contract will have a mechanism that can check whether a ticket holder holds a valid contract.

    We will use a map to hold all members who have a ticket. The map is a place-holder for the token mechanism that will be used for ticketing in the next week.

    We'll set up a simple frontend for testing as we develop the backend.

- ## Week 2
    Here we will integrate the token mechanism into the contract.
    The creator of the contract will set :
    - The number of tokens to be distributed.
    - The duration which the sale will open.
    - The price of the token.
    - The time of the event.

    The token should have the following properties :
    - Unique to the user.
    - Unique to the contract.
    - Should have an expiry time ?

- ## Week 3
    After the token has been developed, we will go through rigorous testing, we will try and implement what we have executed so far in the test net. This means, we will be integrating the backend with the frontend. Ideally, this is where I start working hand in hand with the frontend developer and ensuring that we are on the same page.

    - We will test the ticketing system.
    - We will test the expiry of the tickets.
    - We will test the whole program on Algorand test net to see how it holds up.

- ## Week 4
    If the contract holds up, then we can find a mechanism of showing all available tickets on sale, on the frontend. If not, we will use this week to revise where we have errored and try to find solutions to them.

    So far we would have covered: 
    1. Basic ticketing function except.
        - Commission distribution.
        - Royalty distribution.
        - Resale contract.
        - API payments.
        - QR scanning (which is frontend)
    
    ### Feasibility of a Re-sale Contract.
    Week four will be about analyzing the feasibility of creating a Resale Contract by myself or if it will require a team. 
    One of the challenges of creating a resale token isn't the process of reselling because, reselling is all about selling a token. The actual challenge is tracking the price across different contracts.

    ### Feasibility of Royalty Distribution.
    This is very possible if we decide to create a whole ecosystem where we create a contract that analyzes each token for the royalties. The Algorand ASA standard is quite loose when it comes to royalties and can't be relied upon. It can be much more practical with Ethereum because markets like Opensea already have some well-defined criteria for royalties. But I would imagine this would need more man power.

