import { newMockEvent } from "matchstick-as";
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts";
import {
  ListingCanceled,
  ListingCreateed,
  ListingPurchased,
  ListingUpdated,
} from "../generated/NFTMarketplace/NFTMarketplace";

export function createListingCanceledEvent(
  nftAddress: Address,
  tokenId: BigInt,
  seller: Address
): ListingCanceled {
  let listingCanceledEvent = changetype<ListingCanceled>(newMockEvent());

  listingCanceledEvent.parameters = new Array();

  listingCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  );
  listingCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  );
  listingCanceledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  );

  return listingCanceledEvent;
}

export function createListingCreateedEvent(
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt,
  seller: Address
): ListingCreateed {
  let listingCreateedEvent = changetype<ListingCreateed>(newMockEvent());

  listingCreateedEvent.parameters = new Array();

  listingCreateedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  );
  listingCreateedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  );
  listingCreateedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  );
  listingCreateedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  );

  return listingCreateedEvent;
}

export function createListingPurchasedEvent(
  nftAddress: Address,
  tokenId: BigInt,
  seller: Address,
  buyer: Address
): ListingPurchased {
  let listingPurchasedEvent = changetype<ListingPurchased>(newMockEvent());

  listingPurchasedEvent.parameters = new Array();

  listingPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  );
  listingPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  );
  listingPurchasedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  );
  listingPurchasedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  );

  return listingPurchasedEvent;
}

export function createListingUpdatedEvent(
  nftAddress: Address,
  tokenId: BigInt,
  newPrice: BigInt,
  seller: Address
): ListingUpdated {
  let listingUpdatedEvent = changetype<ListingUpdated>(newMockEvent());

  listingUpdatedEvent.parameters = new Array();

  listingUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  );
  listingUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  );
  listingUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newPrice",
      ethereum.Value.fromUnsignedBigInt(newPrice)
    )
  );
  listingUpdatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  );

  return listingUpdatedEvent;
}
