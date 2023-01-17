import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './events/order-created.event';
import { CreateOrderRequest } from './dto/create-order.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  createOrder(createOrderRequest: CreateOrderRequest) {
    let { userId, description, price } = createOrderRequest;
    this.billingClient.emit('order_created', new OrderCreatedEvent(userId, '123', price));
  };
}
