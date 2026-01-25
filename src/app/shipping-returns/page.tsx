import Link from "next/link";

export default function ShippingReturnsPage() {
    return (
        <div className="bg-white min-h-screen text-black pt-12 pb-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-4 text-black">
                        SHIPPING & <span className="text-primary italic">RETURNS.</span>
                    </h1>
                    <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold">
                        Last Updated: January 25, 2026
                    </p>
                </div>

                <div className="prose prose-zinc max-w-none">
                    <h2>SHIPPING POLICY</h2>

                    <h3>1. Shipping Coverage</h3>
                    <p>We currently ship only within the United States, including:</p>
                    <ul>
                        <li>All 50 U.S. states</li>
                        <li>Washington D.C.</li>
                    </ul>
                    <p>At this time, we do not offer international shipping or shipping to U.S. territories.</p>

                    <h3>2. Shipping Methods and Timeframes</h3>
                    <p>We offer the following shipping options:</p>
                    <ul>
                        <li><strong>Standard Shipping</strong>
                            <ul>
                                <li>Delivery Time: 5-7 business days</li>
                                <li>Cost: Calculated at checkout based on destination and order weight</li>
                            </ul>
                        </li>
                        <li><strong>Expedited Shipping</strong>
                            <ul>
                                <li>Delivery Time: 3-4 business days</li>
                                <li>Cost: Calculated at checkout based on destination and order weight</li>
                            </ul>
                        </li>
                        <li><strong>Express Shipping</strong>
                            <ul>
                                <li>Delivery Time: 1-2 business days</li>
                                <li>Cost: Calculated at checkout based on destination and order weight</li>
                            </ul>
                        </li>
                    </ul>
                    <p>Note: Business days are Monday through Friday, excluding federal holidays. Delivery timeframes are estimates and not guaranteed.</p>

                    <h3>3. Shipping Costs</h3>
                    <p>All orders require payment for shipping. Shipping costs are calculated based on:</p>
                    <ul>
                        <li>Package weight and dimensions</li>
                        <li>Shipping destination</li>
                        <li>Selected shipping method</li>
                    </ul>
                    <p>Final shipping costs will be displayed at checkout before you complete your purchase.</p>

                    <h3>4. Order Processing</h3>
                    <ul>
                        <li>Orders are processed within 1-2 business days of receipt</li>
                        <li>Orders placed on weekends or holidays will be processed the next business day</li>
                        <li>You will receive a confirmation email once your order has been placed</li>
                        <li>You will receive a shipping confirmation email with tracking information once your order ships</li>
                    </ul>

                    <h3>5. Order Tracking</h3>
                    <p>Once your order ships, you will receive:</p>
                    <ul>
                        <li>A shipping confirmation email</li>
                        <li>Tracking number and carrier information</li>
                        <li>Estimated delivery date</li>
                    </ul>
                    <p>You can track your package using the tracking number provided through the carrier's website.</p>

                    <h3>6. Shipping Address</h3>
                    <p>Please ensure your shipping address is accurate and complete before submitting your order.</p>
                    <p>Undrdawg Athletics is not responsible for:</p>
                    <ul>
                        <li>Orders shipped to incorrect addresses provided by the customer</li>
                        <li>Delays caused by incomplete or inaccurate address information</li>
                        <li>Packages marked as "delivered" by the carrier to the address you provided</li>
                        <li>Reshipment costs for orders returned due to incorrect address information</li>
                    </ul>
                    <p><strong>Address Changes:</strong><br />
                        If you need to update your shipping address, contact us immediately after placing your order through our website contact form. We cannot guarantee address changes once the order has been processed or shipped. If an order has already shipped, we cannot redirect the package.</p>

                    <h3>7. Delivery Issues</h3>
                    <p><strong>Lost or Stolen Packages:</strong><br />
                        If your tracking shows the package was delivered but you did not receive it:</p>
                    <ul>
                        <li>Check with neighbors, household members, or building management</li>
                        <li>Verify the delivery address is correct</li>
                        <li>Check alternate locations where the carrier may have left the package</li>
                        <li>Contact the shipping carrier directly to file a claim</li>
                    </ul>
                    <p>While we will assist you in investigating delivery issues, Undrdawg Athletics is not responsible for packages marked as "delivered" by the carrier. Title and risk of loss pass to you upon delivery to the carrier.</p>

                    <p><strong>Damaged Packages:</strong><br />
                        If your package arrives visibly damaged:</p>
                    <ul>
                        <li>Document the damage with photos of the package exterior and contents</li>
                        <li>Contact us within 48 hours of delivery through our website contact form</li>
                        <li>Keep all packaging materials for carrier inspection</li>
                        <li>Provide your order number and tracking information</li>
                    </ul>
                    <p>We will work with you to file a claim with the shipping carrier. However, please note our all sales final policy (see Returns Policy below).</p>

                    <h3>8. Shipping Restrictions</h3>
                    <p>We do not ship to:</p>
                    <ul>
                        <li>P.O. Boxes</li>
                        <li>APO/FPO/DPO military addresses</li>
                        <li>International addresses</li>
                        <li>U.S. territories (Puerto Rico, Guam, U.S. Virgin Islands, etc.)</li>
                    </ul>
                    <p>Orders placed with addresses in restricted categories will be cancelled and refunded.</p>

                    <h3>9. Order Cancellations</h3>
                    <p><strong>Before Shipment:</strong><br />
                        You may cancel your order for a full refund if it has not yet been processed or shipped. Contact us immediately through our website contact form with your order number. Cancellation requests are processed on a case-by-case basis and cannot be guaranteed once order processing has begun.</p>
                    <p><strong>After Shipment:</strong><br />
                        Once an order has shipped, it cannot be cancelled. All sales are final once the order leaves our facility (see Returns Policy below).</p>

                    <hr className="my-8 border-none" />

                    <h2>RETURNS POLICY</h2>

                    <h3>All Sales Are Final</h3>
                    <p>Undrdawg Athletics does not accept returns, exchanges, or offer refunds on any products or event registrations.</p>
                    <p>This includes but is not limited to:</p>
                    <ul>
                        <li>Apparel and merchandise</li>
                        <li>Equipment and accessories</li>
                        <li>Event registrations and tickets</li>
                        <li>Digital products</li>
                        <li>All other products and services</li>
                    </ul>
                    <p>Please carefully review your order before completing your purchase.</p>

                    <h3>Why All Sales Are Final</h3>
                    <p>To keep our costs low and pass savings on to our customers, we operate with an all-sales-final policy. We encourage you to:</p>
                    <ul>
                        <li>Review product descriptions, sizing charts, and specifications carefully</li>
                        <li>Contact us with any questions before purchasing</li>
                        <li>Ensure you are selecting the correct items, sizes, and quantities</li>
                        <li>Double-check event dates and details before registering</li>
                    </ul>

                    <h3>Exceptions</h3>
                    <p>While we maintain an all-sales-final policy, we may consider exceptions only in the following limited circumstances:</p>

                    <p><strong>Defective Products:</strong><br />
                        If you receive a product that is defective due to a manufacturing defect (not damage caused during shipping or user error):</p>
                    <ul>
                        <li>Contact us within 48 hours of delivery</li>
                        <li>Provide your order number</li>
                        <li>Include clear photos showing the defect</li>
                        <li>Provide a detailed description of the issue</li>
                    </ul>
                    <p>We will review your claim on a case-by-case basis. If we determine the product is defective due to manufacturing issues, we may, at our sole discretion, offer a replacement or store credit.</p>

                    <p><strong>Incorrect Item Shipped:</strong><br />
                        If we ship you an incorrect item due to our error:</p>
                    <ul>
                        <li>Contact us within 48 hours of delivery</li>
                        <li>Provide your order number</li>
                        <li>Include photos of the item received</li>
                        <li>Describe what you ordered versus what you received</li>
                    </ul>
                    <p>If we verify we shipped an incorrect item, we will arrange for the correct item to be sent or issue a refund.</p>

                    <h3>What Is Not Covered</h3>
                    <p>We cannot offer refunds, returns, or exchanges for:</p>
                    <ul>
                        <li>Change of mind or buyer's remorse</li>
                        <li>Ordering the wrong size, color, or item</li>
                        <li>Products that don't meet your expectations</li>
                        <li>Products damaged by customer misuse or negligence</li>
                        <li>Event registrations you can no longer attend</li>
                        <li>Shipping delays beyond our control</li>
                        <li>Packages marked as delivered by the carrier</li>
                    </ul>

                    <h3>Event Registration Policy</h3>
                    <p>Event registrations and ticket purchases are non-refundable and non-transferable.</p>
                    <p>This applies to:</p>
                    <ul>
                        <li>All training sessions, camps, and clinics</li>
                        <li>Tournaments and competitions</li>
                        <li>Workshops and seminars</li>
                        <li>Any other events hosted or organized by Undrdawg Athletics</li>
                    </ul>

                    <p><strong>Event Cancellations:</strong><br />
                        If Undrdawg Athletics cancels an event, registered participants will receive:</p>
                    <ul>
                        <li>Full refund of registration fees</li>
                        <li>Notification via email as soon as possible</li>
                    </ul>

                    <p><strong>Event Modifications:</strong><br />
                        If we need to reschedule or modify an event (change of date, time, or location), we will notify registered participants. No refunds will be issued for event modifications.</p>

                    <p><strong>Weather and Unforeseen Circumstances:</strong><br />
                        Events may be cancelled or postponed due to weather, facility issues, or other circumstances beyond our control. In such cases, we will attempt to reschedule. Refunds are not guaranteed for weather-related or force majeure cancellations.</p>

                    <h3>Contact for Exceptions</h3>
                    <p>If you believe you qualify for one of the limited exceptions listed above, please contact us through our website contact form within 48 hours of delivery or discovering the issue.</p>
                    <p>Include:</p>
                    <ul>
                        <li>Your order number</li>
                        <li>Clear photos demonstrating the issue</li>
                        <li>Detailed description of the problem</li>
                        <li>Your contact information</li>
                    </ul>
                    <p>All exception requests are reviewed on a case-by-case basis, and approval is at the sole discretion of Undrdawg Athletics.</p>

                    <h3>DAMAGED OR DEFECTIVE PRODUCTS</h3>
                    <p>While all sales are final, we stand behind the quality of our products. If you receive a damaged or defective product:</p>

                    <p><strong>Shipping Damage</strong><br />
                        For items damaged during shipping:</p>
                    <ul>
                        <li>Document damage immediately with photos (packaging and product)</li>
                        <li>Contact us within 48 hours of delivery</li>
                        <li>Keep all packaging materials</li>
                        <li>We will work with the shipping carrier to file a claim</li>
                    </ul>
                    <p>Note: Title and risk of loss pass to you upon delivery to the carrier. We will assist in the claims process but cannot guarantee resolution.</p>

                    <p><strong>Manufacturing Defects</strong><br />
                        For items with manufacturing defects:</p>
                    <ul>
                        <li>Contact us within 48 hours of delivery</li>
                        <li>Provide clear photos of the defect</li>
                        <li>Describe the issue in detail</li>
                        <li>Include your order number</li>
                    </ul>
                    <p>We will evaluate the claim and may, at our sole discretion, offer a replacement or store credit for verified manufacturing defects.</p>

                    <p><strong>What Is Not a Defect</strong><br />
                        The following are not considered defects:</p>
                    <ul>
                        <li>Minor variations in color, size, or appearance</li>
                        <li>Normal wear and tear from use</li>
                        <li>Damage caused by misuse or improper care</li>
                        <li>Subjective dissatisfaction with the product</li>
                        <li>Differences between product photos and actual items</li>
                    </ul>

                    <h3>CUSTOMER RESPONSIBILITY</h3>
                    <p>By placing an order with Undrdawg Athletics, you acknowledge and accept:</p>
                    <ul>
                        <li>All sales are final with no returns, exchanges, or refunds except as explicitly stated above</li>
                        <li>You are responsible for reviewing product details, sizing, and specifications before purchase</li>
                        <li>You are responsible for providing accurate shipping information</li>
                        <li>Shipping costs are non-refundable</li>
                        <li>Event registrations are non-refundable and non-transferable</li>
                        <li>We are not responsible for packages after delivery to the carrier</li>
                        <li>Exception requests are evaluated case-by-case with no guarantee of approval</li>
                    </ul>

                    <h3>QUESTIONS BEFORE PURCHASE</h3>
                    <p>We strongly encourage you to contact us with any questions before making a purchase. Use the <Link href="/book" className="text-primary hover:underline">contact form on our website</Link> and we will respond as quickly as possible to help you make an informed decision.</p>
                    <p>Better to ask first than be disappointed later – remember, all sales are final!</p>

                    <h3>POLICY UPDATES</h3>
                    <p>We reserve the right to update this Shipping and Returns Policy at any time. Changes will be effective immediately upon posting to our website. The "Last Updated" date at the top of this policy indicates when it was most recently revised.</p>
                    <p>Your continued use of our website and placement of orders after changes constitutes acceptance of the updated policy.</p>
                </div>
            </div>
        </div>
    );
}
